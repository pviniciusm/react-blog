import { Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const PostsTable = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <table cellSpacing={'15px'}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Data</th>
                    <th>Acessar</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.date}</td>
                        <td>
                            <Link to={`/post/${item.id}`}>
                                <Button variant="outlined">Acessar post</Button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
