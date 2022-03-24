import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Post } from '../pages/Post';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
            </Routes>
        </BrowserRouter>
    );
};
