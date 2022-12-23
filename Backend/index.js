const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'nutremas';
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
const platos =  require('./platos.js');


app.get('/', (req, res) => {
    res.send('Hello World!')
    }
);


//insert all platos
app.get('/insert', (req, res) => {
    client.connect(function(err) {
        const db = client.db(dbName);
        const collection = db.collection('platos');
        collection.insertMany(platos, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    });
});


        


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
);
