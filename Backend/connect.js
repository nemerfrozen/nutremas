//mongo
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'nutremas';
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
