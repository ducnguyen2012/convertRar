import React, { useState } from "react";

export function UploadPage() {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (setSelectedFiles.length === 0) return;

    const formData = new FormData();
    Array.from(selectedFiles).forEach(file => {
        formData.append("files", file);    
    });
    

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully!");
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" id="fileInput" multiple onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {selectedFiles && <p>Selected file: {selectedFiles.name}</p>}
    </div>
  );
}

export default UploadPage

