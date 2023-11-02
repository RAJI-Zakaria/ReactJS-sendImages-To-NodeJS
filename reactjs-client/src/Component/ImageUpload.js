import React, { useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';


registerPlugin(FilePondPluginImagePreview);

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (fileItems) => {
    if (fileItems.length > 0) {
      setFile(fileItems[0].file);
    } else {
      setFile(null);
    }
  };

  const uploadImage = async () => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append('image', file); //

        const response = await fetch('http://localhost:5009/api_blog/uploads', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Image uploaded successfully.');
        } else {
          console.error('Error uploading image.');
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    }
  };

  return (
    <div>
      <FilePond
        files={file ? [file] : []}
        onupdatefiles={handleFileUpload}
        allowMultiple={false}
        allowImagePreview={true} // Enable image previews
          
      />
      <button onClick={uploadImage} disabled={!file}>
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload;
