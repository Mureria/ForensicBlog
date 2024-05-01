import React, { useState } from "react";
import axios from "axios";

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleFileChange} />
        {/* <button type="submit">Upload</button> */}
      </form>
    </div>
  );
};

export default ImageUploadForm;
