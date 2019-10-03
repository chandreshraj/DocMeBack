const mongoose = require('mongoose');

const mongoClient = mongoose.connect(
    process.env.DB_CONNECTION, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, 
    () => console.log("Connnected to DB successfully !")
)

module.exports = {
    mongoClient : mongoClient
}