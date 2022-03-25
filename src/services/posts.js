import { api } from './api';

export const getPosts = async () => {
    const result = await api.get('/posts');
    return result.data;
};
