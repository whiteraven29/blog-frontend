import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/posts/";

export const getPosts = () => axios.get(API_URL);
export const uploadPost = (data) => axios.post(API_URL, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
});
