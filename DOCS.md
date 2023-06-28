# Documentation
***

# class MerlinDB
- [new MerlinDB()](#new-merlindboptions)
- [MerlinDB#set()](#setkey-value)
- [MerlinDB#get()](#getkey)
- [MerlinDB#delete()](#deletekey)
- [MerlinDB#all()](#all)
- [MerlinDB#clear()](#clear)
- [MerlinDB#push()](#pushkey-value-string--array)
- [MerlinDB#unshift()](#unshiftkey-value-string--array)
- [MerlinDB#pull()](#pullkey-value-amount-number)
- [MerlinDB#incr()](#incrkey-amount-number)
- [MerlinDB#decr()](#decrkey-amount-number)



## new MerlinDB(options)
Creates a new MerlinDB instance.

Options:
- `DBFileName` - The name of the database file. (optional, default: `MerlinDB.sqlite`)
- `FolderName` - The name of the folder where the database file will be stored. (optional, default: `MerlinDB`)

Example:
```js
const { MerlinDB } = require('merlindb');
const db = new MerlinDB({
    DBFileName: 'example.sqlite', // optional. default: 'MerlinDB.sqlite'
    FolderName: 'example' // optional. default: 'MerlinDB'
});
```

## .set(key, value)
Sets a key-value pair.
```js
db.set('key', 'value'); // returns 'value'
```

## .get(key)
Gets a value from key.
```js
db.get('key'); // returns 'value'
```

## .delete(key)
Deletes a key-value pair.
```js
db.delete('key'); // returns 'value'
```

## .all()
Retrieves all data from the database.
```js
db.set('key', 'value');
db.set('justice',39);
db.all(); // returns { key: 'value', justice: 39 }
```

## .clear()
⚠️ Warning ⚠️ Clear removes all data from the database.
```js
db.clear();
```

## .push(key, value: String | Array)
Adds value to array.
```js
db.push('key', 'value4'); // returns [ 'value4' ]
db.push('key', ['value5', 'value6']) // returns  [ 'value4', 'value5', 'value6' ]
```

## .unshift(key, value: String | Array)
Adds value to the beginning of the array.
```js
db.unshift('key', 'value3'); // returns [ 'value3', 'value4', 'value5', 'value6' ]
db.unshift('key', ['value1', 'value2']); // returns [ 'value1', 'value2', 'value3', 'value4', 'value5', 'value6' ]
```

## .pull(key, value, amount: Number)
Removes value from array. Default amount is 0 so it removes all values from array.
```js
db.set('key', ['value1', 'value1', 'value2']);
db.pull('key', 'value1', 1); // returns [ 'value1', 'value2' ]

db.set('key', ['value1', 'value1', 'value1', 'value2']);
db.pull('key', 'value1'); // returns [ 'value2' ]
```

## .incr(key, amount: Number)
Increments a value by amount. Default amount is 1.
```js
db.set('key', 38);
db.incr('key'); // returns 39
```

## .decr(key, amount: Number)
Decrements a value by amount. Default amount is 1.
```js
db.set('key', 40);
db.decr('key'); // returns 39
```
