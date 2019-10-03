const DocMeModel = require('../models/docMe.model');

let getAllDocuments = async (req, res) => {
    console.log("getting Documents of user " + req.params.user);
    if (req.params.user != null) {
        try {
            const Documentdata = await DocMeModel.find({ 'createdBy': req.params.user }).select('name description');
            if (Documentdata.length > 0) res.status(200).json(Documentdata);
            else res.status(404).json({ message: "Document not Found" });
        }
        catch (err) {
            console.log("Error while Finding the document " + err);
            res.status(502).json({ message: "Error while find the document" });
        }
    }
}

let getDocumentByName = (req, res) => {

}

//! Document by ID
let getOneDocumentById = async (req, res) => {
    console.log("Document ID " + req.params.docId);
    if (req.params.docId != null) {
        try {
            const Documentdata = await DocMeModel.findById(req.params.docId);
            if (Documentdata != null) res.status(200).json(Documentdata);
            else res.status(404).json({ message: "Document not Found" });
        }
        catch (err) {
            console.log("Error while Finding the document by ID " + err);
            res.status(502).json({ message: "Error while find the document by ID" });
        }
    }
}

let updateDocument = async (req, res) => {
    if (req.body != null) {
        if (req.body.name == null) res.status(400).json({ message: "Incomplete request" });
        const DocMefound = await DocMeModel.findById(req.params.docId);
        if (DocMefound != null) {
            const updateObject = {
                content: req.body.content,
                editedAt: Date.now
            }

            const Documentdata = await DocMeModel.findById(req.params.docId);
            if (Documentdata != null) {
                try {
                    const updateDocument = await DocMeModel.updateOne(
                        { _id: req.body.postId },
                        { $set: updateObject }
                    );
                    console.log("Updated", updateDocument);
                    res.status(200).json({message : "Updated Document Successfully"});
                }
                catch (err) {
                    console.log("Error while Finding the document by ID " + err);
                    res.status(502).json({ message: "Error while find the document by ID" });
                }
            }
            else res.status(404).json({ message: "Document not Found" });

        }
        else {
            res.status(404).json({ message: "Document not Found" });
        }
    }
    else {
        res.status(400).json({ message: "Bad Request" });
    }
}

let deleteDocumentById = (req, res) => {

}

let createDocument = (req, res) => {
    if (req.body != null) {
        if (req.body.name == null) res.status(400).json({ message: "Incomplete request" });
        const docMeData = new DocMeModel({
            name: req.body.name,
            description: req.body.description,
            content: req.body.content,
            createdBy: req.body.createdBy
        })
        try {
            docMeData.save()
                .then(data => {
                    console.log("Document Saved Successfully");
                    res.status(200).json({ message: "Document saved Successfully" });
                })
        }
        catch (err) {
            console.error("Error while Creating Document " + err);
            res.status(502).json({ message: "Error while Creating Document" });
        }
    }
    else {
        res.status(400).json({ message: "Bad Request" });
    }
}
module.exports = {
    getAllDocuments: getAllDocuments,
    getDocumentByName: getDocumentByName,
    getOneDocumentById: getOneDocumentById,
    createDocument: createDocument,
    updateDocument: updateDocument,
    deleteDocumentById: deleteDocumentById
}