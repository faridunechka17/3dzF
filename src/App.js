import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import CreatePostPage from "./pages/createPostPage/CreatePostPage";

const App = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<PostPage/>} />
                    <Route path='/users' element={<CreatePostPage/>} />
                </Routes>
            </BrowserRouter>
    );
};

export default App;