const mongoose = require('mongoose');
const document = mongoose.Schema({
    name : {
        type : String
    },
    description : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    editedAt : {
        type : Date,
        default: Date.now()
    },
    content : {
        type : JSON
    },
    createdBy : {
        type : Number
    }
});

module.exports = mongoose.model('Document',document );