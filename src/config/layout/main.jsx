import { Container } from '@mui/material';
import React from 'react';

export const MainLayout = ({ children }) => {
    return <Container maxWidth="md">{children}</Container>;
};
