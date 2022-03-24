import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'post',
    initialState: {
        id: 1,
        title: 'Meu post',
        content: 'Este é o meu primeiro post usando React com Redux Toolkit',
        date: new Date().toDateString(),
    },
    reducers: {},
});

// export const {} = postSlice.actions;
export default postSlice.reducer;
