const path = require('path');
const fs = require('fs');
const sqlite = require('better-sqlite3');
const MerlinDBError = require('./MerlinDBError');

class MerlinDB {
    constructor({
        DBFileName = 'MerlinDB.sqlite',
        FolderName = 'MerlinDB'
    }) {
        this.DBFileName = DBFileName;
        this.FolderName = FolderName;
        this.base_path = path.join(process.cwd(), this.FolderName);
        if(!DBFileName.endsWith('.sqlite')) throw new Error('DBFileName must end with .sqlite');
        
        fs.mkdirSync(this.base_path, { recursive: true });
        this.db = new sqlite(path.join(this.base_path, this.DBFileName));
        this.db.prepare('CREATE TABLE IF NOT EXISTS MerlinDB (data)').run();
        this.db.prepare('SELECT data FROM MerlinDB').all()[0] || this.db.prepare('INSERT INTO MerlinDB (data) VALUES (?)').run('{}');

    }

    get(key) {
        if(!key) throw new MerlinDBError('Key is not defined!');
        return this.parse(this.db.prepare('SELECT data FROM MerlinDB').all()[0]?.data)[key] || null;
    }

    set(key, value) {
        if(!key) throw new MerlinDBError('Key is not defined!');
        if(!value) throw new MerlinDBError('Value is not defined!');
        const data = this.parse(this.db.prepare('SELECT data FROM MerlinDB').all()[0]?.data);
        data[key] = value;
        this.db.prepare('UPDATE MerlinDB SET data = ?').run(JSON.stringify(data));

        return value;
    }
    
    delete(key) {
        if(!key) throw new MerlinDBError('Key is not defined!');
        const data = this.parse(this.db.prepare('SELECT data FROM MerlinDB').all()[0]?.data);
        let value = data[key];
        delete data[key];
        this.db.prepare('UPDATE MerlinDB SET data = ?').run(JSON.stringify(data));

        return value;
    }

    all() {
        return this.parse(this.db.prepare('SELECT data FROM MerlinDB').all()[0]?.data);
    }

    clear() {
        this.db.prepare('DELETE FROM MerlinDB').run();
        this.db.prepare('CREATE TABLE IF NOT EXISTS MerlinDB (data)').run();
        
        return this.db.prepare('SELECT data FROM MerlinDB').all()[0] || this.db.prepare('INSERT INTO MerlinDB (data) VALUES (?)').run('{}');
    }

    incr(key, value=1) {
        if(!key) throw new MerlinDBError('Key is not defined!');
        let data = this.get(key);
        if(isNaN(data)) throw new MerlinDBError('Data is not a number');
        data += value;

        return this.set(key, data);
    }

    decr(key, value=1) {
        if(!key) throw new MerlinDBError('Key is not defined!');
        let data = this.get(key);
        if(isNaN(data)) throw new MerlinDBError('Data is not a number');
        data -= value;
        
        return this.set(key, data);
    }

    push(key, value) {
        if(!key) throw new MerlinDBError('Key is not defined!');
        if(!value) throw new MerlinDBError('Value is not defined!');
        const data = this.get(key);
        if(!data) return this.set(key, [...Array.isArray(value) ? value : [value]]);
        if(Array.isArray(data)) {
            data.push(...Array.isArray(value) ? value : [value]);
            return this.set(key, data);
        } else {
            return this.set(key, [value]);
        }
    }

    unshift(key, value) {
        if(!key) throw new MerlinDBError('Key is not defined!');
        if(!value) throw new MerlinDBError('Value is not defined!');
        const data = this.get(key);
        if(!data) return this.set(key, [...Array.isArray(value) ? value : [value]]);
        if(Array.isArray(data)) {
            data.unshift(...Array.isArray(value) ? value : [value]);
            return this.set(key, data);
        } else {
            return this.set(key, [value]);
        }
    }
    
    pull(key, value, amount = 0) {
        if(!key) throw new MerlinDBError('Key is not defined!');
        if(!value) throw new MerlinDBError('Value is not defined!');
        const data = this.get(key);
        if (!data) return null;
        if(!Array.isArray(data)) throw new MerlinDBError('Data is not an array');
        if(isNaN(amount)) throw new MerlinDBError('Limit is not a number');
        let count = 0;
        if(amount === 0) {
            while(data.includes(value)) {
                data.splice(data.indexOf(value), 1);
                count++;
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                if (data[i] === value) {
                    data.splice(i, 1);
                    count++;
                    if (count === amount) break;
                }
            }
        }
        
        return this.set(key, data);
    }

    parse(data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            throw new MerlinDBError(e.message);
        }
    }
}

module.exports = MerlinDB;