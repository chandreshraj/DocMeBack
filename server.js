const express = require('express');
require('dotenv/config');
require('./monogClient');
const bodyParser = require('body-parser');
const app = express();

const fileMeRoutes = require('./FileMeBone/fileMeRoutes');
const docMeRoutes = require('./DocMeBone/docMeRoutes');

const PORT = '4646';
app.use(bodyParser.json());
app.use('/docme',docMeRoutes);
app.use('/fileme',fileMeRoutes);
app.listen(PORT,()=>{
    console.log("Server is Up and Running on Port " + PORT);
})