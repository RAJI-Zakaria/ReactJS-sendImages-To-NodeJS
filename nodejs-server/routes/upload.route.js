const express = require('express');
const router = express.Router();
const UploadController = require('../controllers/uploads.controller');
const path = require('path');

const projectRoot = process.cwd();

const ImageUploadManager = require('../class/ImageUploadManager');

const uploadManager = new ImageUploadManager(path.join(projectRoot, 'nodejs-server/uploads'), 'http://localhost:5009');
console.log(__dirname)
console.log(__dirname)
console.log(__dirname)
console.log(__dirname)


// router.delete('/:id', UploadController.deleteByPk);
router.post('/', uploadManager.upload.single('image'), (req, res, next)=>{
    req.uploadManager = uploadManager;
    next();
}, UploadController.save); 
// Define routes
router.get('/*', (req, res, next)=>{
    req.uploadManager = uploadManager;
    next();
}, UploadController.fetch);

 
module.exports = router;
