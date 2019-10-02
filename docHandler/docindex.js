    // const mongo = require('../MongoClient');
    // const mongoose = require('mongoose');
const DocumentModel = require('./document');
//! reuturns the document of the Users
let getDocs =  async (req, res) => {
    documentModel.find((err,data)=>{
        if(err) console.log(err);
        console.log(data);
        res.status(200).json(data);
    });
}

//! Add the document to the dataBase
let addDoc =(req,res) => {
    console.log("Let's insert some data to Mongo");
    let newdocument = ({
        name : "testdoument1",
        description : "Adding the test document for testing ",
        content : {
            data : "entering some content to the document for testing purpose"
        },
        createdBy : "10"
    });
    DocumentModel.insertMany(newdocument, {ordered:false}, (err,res)=>{
        if(err) console.log(err);
        console.log("Saved the Document Data Successfully");
        res.status(200).json("SuccessFully Saved the Data");
    });
}

//! updates the Document that is updated
let updateDoc = (req, res) => {
    res.status(200).json("udpated the doc");
}

//! delete the document that is requested
let deleteDoc = (req, res) => {
    res.status(200).json("deleted the document");
}

//!get the one document that is requested
let getOneDoc = (req, res) => {
    res.status(200).json("getting the requested doc");
}

module.exports = {
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    getOneDoc
}