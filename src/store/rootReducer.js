import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './modules/posts/slice';

// to-do: add reducers
export const reducers = combineReducers({
    posts: postsReducer,
});
