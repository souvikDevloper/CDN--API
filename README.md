File Upload and Metadata API


This project is a backend API built with Node.js and Express.js to handle file uploads, metadata

management using Redis, and file retrieval. It demonstrates the integration of modern backend

 technologies, focusing on scalability, performance, and developer-friendly API design.

🚀 Features


File Upload: Upload files to the server with proper validation.

Retrieve Files: Access uploaded files dynamically using their filenames.

Metadata Management: Efficiently store and retrieve file metadata using Redis.

Error Handling: Comprehensive error messages and validation for smooth API interactions.

RESTful Design: Follows RESTful conventions for easy frontend integration.

🛠️ Technologies Used


Node.js: Backend runtime for event-driven applications.

Express.js: Framework for building API structures.

Multer: Middleware for handling file uploads.

Redis: In-memory data store for caching metadata.

Postman: API testing and debugging.

📋 API Endpoints

1. Upload File

Method: POST

URL: /upload

Description: Upload a file to the server and store its metadata in Redis.

Request:

file (form-data): The file to upload.

Response:


json

Copy

Edit

{
  "filename": "unique_filename",

  "originalName": "example.txt",

  "message": "File uploaded successfully."

}
2. Retrieve File


Method: GET

URL: /files/:filename

Description: Retrieve a previously uploaded file by its filename.

Response: The file will be downloaded.

3. Fetch Metadata

Method: GET

URL: /metadata/:filename

Description: Fetch metadata of the uploaded file from Redis.

Response:


json

Copy

Edit

{
  "filename": "unique_filename",

  "originalName": "example.txt",

  "size": 12345,

  "mimetype": "text/plain"

}
4. Delete File


Method: DELETE

URL: /delete/:filename

Description: Deletes the uploaded file and its metadata from the server and Redis.

Response:


json

Copy

Edit

{
  "message": "File and metadata deleted successfully."

}
🛠️ Setup and Running the Project


Prerequisites


Node.js (v16 or later)

Redis (installed and running)

Postman (optional for API testing)

Steps to Run

Clone the repository:

bash

Copy

Edit

git clone <repository_url>

cd <repository_directory>

Install dependencies:


bash

Copy

Edit

npm install


Start Redis:

bash


Copy

Edit

redis-server

Start the server:

bash

Copy

Edit

npm start

Use Postman or cURL to interact with the API endpoints.


🔄 Project Workflow

File Upload: Upload a file via /upload. 
The file is saved in the uploads/ folder, and its metadata is cached in Redis.

File Retrieval: Access the file through /files/:filename.

Fetch Metadata: Retrieve metadata using /metadata/:filename.

Delete File: Delete the file and its metadata via /delete/:filename.

✨ Skills Demonstrated


File Handling: Efficiently managing file uploads and storage with Multer.

Caching: Fast metadata access with Redis.

Error Handling: Robust error handling for edge cases.

API Design: Scalable and RESTful API principles.


System Design: Modular and scalable backend architecture.


🚀 Future Enhancements

Add support for multiple file uploads.

Integrate user authentication with JWT.


Implement cloud storage (e.g., AWS S3, Google Cloud) for file storage.

Add monitoring and logging tools (e.g., Winston, PM2).

📜 About


A project focused on modern backend development principles.


🧑‍💻 Contributors

@Souvikalp

@souvikDevloper

🏷️ License


This project is licensed under MIT License.