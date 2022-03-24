import { combineReducers } from '@reduxjs/toolkit';
import posts from './modules/posts/slice';
import post from './modules/post/slice';

// to-do: add reducers
export const reducers = combineReducers({
    posts,
    post,
});
