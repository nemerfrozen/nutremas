const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://192.168.31.65:27017';
const dbName = 'nutremas';
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
const platos =  require('./platos.js');
//user cors
const cors = require('cors');
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World!')
    }
);


//insert all platos
app.get('/insert', (req, res) => {
    client.connect(function(err) {
        const db = client.db(dbName);
        const collection = db.collection('platos');
        const listpLatos = platos;
        console.log(listpLatos);
        listpLatos.forEach(plato => {
            collection.insertOne(plato, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Inserted %d documents into the "platos" collection. The documents inserted with "_id" are:', result.insertedCount, result.insertedIds);
                }
            });
        });
        res.send('sync done')
    });
});

app.get('/platos', (req, res) => {
    client.connect(function(err) {
        const db = client.db(dbName);
        const collection = db.collection('platos');
        collection.find({}).toArray(function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                console.log('Found the following records');
                console.log(docs);
                res.send(docs);
            }
        });
    });
});

app.get('/platos/:name', (req, res) => {
    // find platos contain desayuno
    client.connect(function(err) {
        const db = client.db(dbName);
        const collection = db.collection('platos');
        collection.find({plato: {$regex: req.params.name}}).toArray(function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                console.log('Found the following records');
                //console.log(docs);    
                //get one random plato
                const random = Math.floor(Math.random() * docs.length);
                console.log(random);
                res.send(docs[random]);
            
            }
        });
          
    });
});

  


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
);
