import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, title: 'Meu post', content: '', date: new Date().toDateString() },
    {
        id: 2,
        title: 'Meu segundo post',
        content: '',
        date: new Date().toDateString(),
    },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
});

// export const {} = postsSlice.actions;
export default postsSlice.reducer;
