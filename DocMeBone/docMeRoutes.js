const express = require('express');
const router = express.Router();
const DocMe = require('./index')

router.get('/:user',DocMe.getAllDocuments);
router.get('/names',DocMe.getDocumentByName);
router.get('/docId/:docId',DocMe.getOneDocumentById);
router.post('/',DocMe.createDocument);
router.patch('/update',DocMe.updateDocument);
router.delete('/:docId',DocMe.deleteDocumentById);
module.exports = router;