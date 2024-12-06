File Upload and Metadata API
This project is a backend API built with Node.js and Express.js to handle file uploads, metadata management with Redis, and file retrieval. It demonstrates the integration of modern backend technologies and focuses on scalability, performance, and developer-friendly API design.

Features
File Upload: Upload files to the server with proper validation.
Retrieve Files: Access uploaded files dynamically using their filenames.
Metadata Management: Store and retrieve file metadata efficiently using Redis.
Error Handling: Comprehensive error messages and validation for smoother API interactions.
RESTful Design: Follows RESTful conventions for easy integration with frontends.
Technologies Used
Node.js: Backend runtime for efficient, event-driven applications.
Express.js: Framework for building the API structure.
Multer: Middleware for handling file uploads.
Redis: In-memory data store for caching file metadata.
Postman: Used for API testing and debugging.
Endpoints
1. Upload File
Method: POST
URL: /upload
Description: Upload a file to the server and store its metadata in Redis.
Request:
file (form-data): The file to upload.
Response:
json
Copy code
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
Copy code
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
Copy code
{
  "message": "File and metadata deleted successfully."
}
Setup and Running the Project
Prerequisites
Node.js (v16 or later)
Redis installed and running
Postman for API testing (optional)
Steps to Run
Clone the repository:
bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install dependencies:
bash
Copy code
npm install
Start Redis:
bash
Copy code
redis-server
Start the server:
bash
Copy code
npm start
Use Postman or cURL to interact with the API endpoints.
Project Workflow
File Upload: Upload a file via /upload. The file is saved to the uploads/ folder, and its metadata is cached in Redis.
File Retrieval: Access the file through /files/:filename.
Fetch Metadata: Retrieve the metadata of the file using /metadata/:filename.
Delete File: Delete the file and its metadata via /delete/:filename.
Skills Demonstrated
File Handling: Efficiently handling file uploads and storage with Multer.
Caching: Using Redis for fast metadata access.
Error Handling: Robust error handling for edge cases.
API Design: RESTful API principles for scalability and usability.
System Design: Modular and scalable backend architecture.
Future Enhancements
Add support for multiple file uploads.
Integrate user authentication with JWT.
Implement cloud storage (e.g., AWS S3, Google Cloud) for file storage.
Add monitoring and logging tools (e.g., Winston, PM2).
