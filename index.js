const express=require('express');
const app=express();
const port = 9880;
const docHandler = require("./docHandler/docindex");
const fileHandler = require("./fileHandler/fileindex");


//! docBone's doc routes to handler mapping
app.post("/docMe/doc/",docHandler.addDoc);
app.get("/docMe/doc/getdocs",docHandler.getDocs);
app.get("/docMe/doc/getOneDoc",docHandler.getOneDoc);
app.post("/docMe/doc/update",docHandler.updateDoc);
app.delete("/docMe/doc/deleteDoc",docHandler.deleteDoc);

//! docBone's file routes to handler mapping
app.get("/docMe/file/getFiles",fileHandler.getFilesList);
app.get("/docMe/file/downloadFile",fileHandler.downloadFile);
app.delete("docMe/file/deleteFile",fileHandler.deleteFile);

//! server is listening to the Given port
app.listen(port, () => console.log(`app listening successfully on port ${port}!`));