import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/posts/${id}/`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      {post.images.map((image, index) => (
        <img key={index} src={image} alt={`Post image ${index}`} />
      ))}
    </div>
  );
};

export default PostDetail;
