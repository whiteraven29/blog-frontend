import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/posts/")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content.slice(0, 100)}...</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
      <Link to="/upload">Write a New Post</Link>
    </div>
  );
};

export default PostList;
