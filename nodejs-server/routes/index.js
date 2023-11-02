const express = require('express'); 
const router = express.Router();
 

//Dealing with images upload & fetch
router.use('/uploads', require('./upload.route'));

module.exports = router;
