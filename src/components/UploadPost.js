import React, { useState } from "react";
import axios from "../api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UploadPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    images.forEach((image) => formData.append("images", image));

    axios.post("/posts/create/", formData)
      .then(() => alert("Post created successfully!"))
      .catch((error) => console.error("Error creating post:", error));
  };

  return (
    <div>
      <h1>Write a New Post</h1>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill value={content} onChange={setContent} />
      <input type="file" multiple onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Publish</button>
    </div>
  );
};

export default UploadPost;
