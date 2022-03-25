import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PostsTable } from '../../components/PostsTable';
import { fetchPosts } from '../../store/modules/posts/slice';

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <React.Fragment>
            <Grid container spacing={3} direction={'column'}>
                <Grid item>
                    <h1>React Blog</h1>
                    <p>Growdev - 5a edição</p>
                </Grid>
                <Grid item>
                    <h3>Meus posts:</h3>
                    <PostsTable />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
