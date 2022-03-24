import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

export const Post = () => {
    const post = {
        id: 1,
        title: 'Meu post',
        content: 'Este é o meu primeiro post usando React com Redux Toolkit',
        date: new Date().toDateString(),
    };
    const [disabled, setDisabled] = useState(true);

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
                    defaultValue={post.content}
                    rows={10}
                    cols={30}
                />
                <br />
                <Button
                    variant="contained"
                    onClick={() => setDisabled(!disabled)}
                >
                    {disabled ? 'Habilitar' : 'Cancelar'}
                </Button>{' '}
                <Button variant="contained">Salvar</Button>
            </Grid>
        </Grid>
    );
};
