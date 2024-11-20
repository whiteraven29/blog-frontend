import React, { useState } from "react";
import { uploadPost } from "../api";

const UploadPost = () => {
    const [formData, setFormData] = useState({ title: "", content: "", file: null });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", formData.title);
        data.append("content", formData.content);
        if (formData.file) data.append("file", formData.file);

        uploadPost(data).then(() => alert("Post uploaded!"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
            />
            <textarea
                placeholder="Content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
            />
            <input
                type="file"
                onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
            />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadPost;
