import React from "react";
import PostList from "./components/PostList";
import UploadPost from "./components/UploadPost";
import Visualizations from "./components/Visualizations";

const App = () => (
    <div>
        <UploadPost />
        <PostList />
        <Visualizations />
    </div>
);

export default App;
