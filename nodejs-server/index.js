const express = require('express');
const cors = require('cors');  
const path = require('path');

const ImageUploadManager = require('./class/ImageUploadManager');


const app = express();
app.use(cors());
app.use(express.json());

const uploadManager = new ImageUploadManager(path.join(__dirname, 'uploads'), 'http://localhost:3000');

app.post('/upload', uploadManager.upload.single('image'), (req, res) => {
  try {
    if (req.file instanceof Error) {
      console.error('File upload error:', req.file);
      return res.status(500).json({ error: 'File upload error' });
    }

    // Construct the URL based on the server's configuration and the uploaded filename
    const imageUrl = uploadManager.getFullImageUrl(req.file.filename);
 

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/uploads/*', (req, res) => {
  const filePath = req.params[0]; // Extract the entire path after /uploads/
  uploadManager.retrieveFile(filePath, res);
});

 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
