import React, { useState, useEffect } from 'react';

export const DownloadPage = () => {
  const [files, setFiles] = useState([]);
    
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('http://localhost:5000/DownloadPage'); // Endpoint to list files
        if (response.ok) {
          const data = await response.json();
          setFiles(data.files); // Assuming the response contains a list of filenames
        } else {
          console.error('Failed to fetch files');
        }
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const handleDownload = (filename) => {
    // Create a link element and trigger a download
    const link = document.createElement('a');
    link.href = `http://localhost:5000/result.mp3`;
    link.download = filename; // Optional: specifies the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Available Files</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <button onClick={() => handleDownload(file)}>{file}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadPage;
