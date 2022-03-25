import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
    addPost,
    selectPostById,
    updatePost,
} from '../../store/modules/posts/slice';

export const Post = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = useSelector((state) => selectPostById(state, id));

    useEffect(() => {
        if (!post) {
            navigate('/');
        }
    }, [post]);

    const [disabled, setDisabled] = useState(true);

    if (!post) {
        return null;
    }

    const [body, setBody] = useState(post.body);
    const dispatch = useDispatch();

    const handleSalvar = () => {
        dispatch(
            updatePost({
                id: post.id,
                changes: {
                    body,
                    title: 'teste',
                },
            })
        );

        dispatch(
            addPost({
                id: 109,
                title: 'Teste Add Post',
                body: 'Body add Post',
            })
        );
    };

    return (
        <Grid
            container
            direction={'column'}
            sx={{
                width: '100%',
                alignItems: 'center',
            }}
        >
            <Grid item>
                <h2>{post.title}</h2>
            </Grid>
            <Grid item sx={{ textAlign: 'center' }}>
                <Typography variant="caption">{post.date}</Typography>
                <br />
                <br />
                <textarea
                    disabled={disabled}
                    defaultValue={post.body}
                    rows={10}
                    cols={30}
                    onChange={(event) => setBody(event.target.value)}
                />
                <br />
                <Button
                    variant="contained"
                    onClick={() => setDisabled(!disabled)}
                >
                    {disabled ? 'Habilitar' : 'Cancelar'}
                </Button>{' '}
                <Button variant="contained" onClick={() => handleSalvar()}>
                    Salvar
                </Button>
            </Grid>
        </Grid>
    );
};
