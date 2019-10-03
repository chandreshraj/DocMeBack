const mongooes = require('mongoose');

const fileSchema = new mongooes.Schema({
    fileName:{
        type : String,
        required : true
    },
    fileType:{
        type : String
    },
    timestamp :{
        type : Date
    }
});

module.exports = mongooes.model('File',fileSchema );