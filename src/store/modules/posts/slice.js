import {
    createAsyncThunk,
    createSlice,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { getPosts } from '../../../services/posts';

/*
{
    ids: [],
    entities: {}
}
*/

/*
{
    "userId": 1,
    "id": 1,
    "title": "",
    "body": ""
},
*/

const postsAdapter = createEntityAdapter({
    selectId: (post) => post.id,
});

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    return await getPosts();
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        addPost: postsAdapter.addOne,
        updatePost: postsAdapter.updateOne,
    },
    extraReducers: {
        [fetchPosts.fulfilled]: postsAdapter.addMany,
    },
});

// postsAdapter.getSelectors().selectById

export const { updatePost, addPost } = postsSlice.actions;
export default postsSlice.reducer;

export const postsSelector = (state) => state.posts;
export const { selectAll: selectPosts, selectById: selectPostById } =
    postsAdapter.getSelectors(postsSelector);
