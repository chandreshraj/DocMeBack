const mongoose = require('mongoose');
const document = mongoose.Schema({
    name : {
        type : String,
        require : true
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
        type : String
    }
});

module.exports = mongoose.model('Document',document );