const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

const app = express();
const port = 3000;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// POST route for file upload
app.post('/upload', (req, res) => {
  const form = new formidable.IncomingForm();

  // Set upload directory and keep original file name
  form.uploadDir = path.join(__dirname, 'uploads');
  form.keepExtensions = true;

  // Parse the incoming form data
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error during file upload:', err);
      return res.status(400).json({ error: 'File upload failed', details: err });
    }

    // Log the files and fields
    console.log('Files:', files);
    console.log('Fields:', fields);

    // Handle multiple files or single file upload
    const uploadedFile = Array.isArray(files.file) ? files.file[0] : files.file;

    if (!uploadedFile) {
      console.error('No file uploaded');
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = uploadedFile.filepath;
    const fileName = uploadedFile.originalFilename;
    const fileSize = uploadedFile.size;

    console.log(`File uploaded: ${fileName}`);
    console.log(`File path: ${filePath}`);
    console.log(`File size: ${fileSize} bytes`);

    // Send response with file details
    res.status(200).json({
      message: 'File uploaded successfully',
      filePath: filePath,
      fileName: fileName,
      fileSize: fileSize,
    });
  });
});

// Test route to check if server is working
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Server is working fine!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
