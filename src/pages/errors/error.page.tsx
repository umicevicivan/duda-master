import React, { FC } from 'react';
import { useRouteError } from 'react-router-dom';
import { Typography } from '@mui/material';

export const ErrorPage: FC = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Something went wrong :(</h1>
      <Typography>{JSON.stringify(error)}</Typography>
    </>
  );
};
