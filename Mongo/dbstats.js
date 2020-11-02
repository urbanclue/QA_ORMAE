const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    db.stats((err, stats) => {

        if (err) throw err;

        console.log(stats);

        client.close();
    })
});