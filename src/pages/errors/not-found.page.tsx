import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export const NotFoundPage: FC = () => {
  return (
    <Box>
      <h1>Oops! You seem to be lost.</h1>
      <Link to='/'>Home</Link>
    </Box>
  );
};
