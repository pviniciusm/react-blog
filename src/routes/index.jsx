import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PostPage } from '../pages/PostPage';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<PostPage />} />
            </Routes>
        </BrowserRouter>
    );
};
