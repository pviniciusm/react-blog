import { Grid } from '@mui/material';
import React from 'react';
import { PostsTable } from '../../components/PostsTable';

export const Home = () => {
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
