import React, { useEffect, useState } from "react";
import { getPosts } from "../api";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((res) => setPosts(res.data));
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    {post.file && (
                        <a href={`http://127.0.0.1:8000${post.file}`} download>Download File</a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PostList;
