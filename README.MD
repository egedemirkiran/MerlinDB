<h1 align="center"> MerlinDB </h1>
<p align="center">
  <a href="https://www.npmjs.com/package/merlindb" target="_blank"> 
    <img alt="NPM" src="https://img.shields.io/npm/v/merlindb.svg?logo=npm"><br>
  </a>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg" />
  <img alt="Stars" src="https://img.shields.io/github/stars/Justice39/MerlinDB">  
  <a href="https://github.com/Justice39/MerlinDB/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

***

> MerlinDB is a fast and easy-to-use NoSQL KV database.

## Usage


### Installation

```sh
npm install --save merlindb
```
### [Documentation](https://github.com/Justice39/MerlinDB/blob/main/DOCS.md)

### Example

```js
const { MerlinDB } = require('merlindb');
const db = new MerlinDB({
    DBFileName: 'example.sqlite', // optional default: 'MerlinDB.sqlite'
    FolderName: 'example' // optional default: 'MerlinDB'
});

// Set a key-value pair.
db.set('key', 'value'); // returns 'value'

// Get a value from key.
db.get('key'); // returns 'value'

// Delete a key-value pair.
db.delete('key'); // returns 'value'

// -------------------------------------- //

db.set('key', 'value');
db.set('justice',39); 

// Retrieve all data from the database.
db.all(); // returns { key: 'value', justice: 39 }

// ⚠️ Warning ⚠️ Clear removes all data from the database.
db.clear();

// -------------------------------------- //

// Adding single value to array.
db.push('key', 'value4'); // returns [ 'value4' ]

// Adding multiple values to array.
db.push('key', ['value5', 'value6']) // returns  [ 'value4', 'value5', 'value6' ]

// Adding single value to the beginning of the array.
db.unshift('key', 'value3'); // returns [ 'value3', 'value4', 'value5', 'value6' ]

// Adding multiple values to the beginning of the array.
db.unshift('key', ['value1', 'value2']); // returns [ 'value1', 'value2', 'value3', 'value4', 'value5', 'value6' ]

db.delete('key');
// -------------------------------------- //

db.set('key', ['value1', 'value1', 'value1', 'value2']);

// Removing 1 value from array.
db.pull('key', 'value1', 1); // returns [ 'value1', 'value1', 'value2' ]

// Removing every value from array.
db.pull('key', 'value1'); // returns [ 'value2' ]

db.delete('key');

// -------------------------------------- //

db.set('key', 39);

// Incrementing a value.
db.incr('key'); // returns 40

// Incrementing a value by 5.
db.incr('key', 5); // returns 45

// Decrementing a value.
db.decr('key'); // returns 44

// Decrementing a value by 5.
db.decr('key', 5); // returns 39
```
***  

## Authors

👤 **Justice39**

* Website: [justice39.dev](https://justice39.dev/)
* Github: [@Justice39](https://github.com/Justice39)

***

## Show your support
Give a ⭐️ if you liked this project!

<a href="https://www.buymeacoffee.com/justice39" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
***

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/Justice39/MerlinDB) if you want to contribute.<br />
