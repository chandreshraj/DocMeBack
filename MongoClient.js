// const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/docMeDB';
let getMongoClient = async function () {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    //to get the default connection
    let db = await mongoose.connection;
    db.on("error",console.error.bind(console,"Mongo Connection error"));
    // return db;
};


module.exports = {
    getMongoClient
};