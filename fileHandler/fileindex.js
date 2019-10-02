//! reuturns the File of the Users.
let getFilesList = (req, res) => {
    res.status(200).json("getFiles");
}

//! delete the requested file .
let deleteFile = (req, res) => {
    res.status(200).json("deleted the Fileument");
}

//! download the requested file.
let downloadFile = (req, res) => {
    res.status(200).json("getting the requested File");
}


module.exports = {
    getFilesList,
    deleteFile,
    downloadFile
}