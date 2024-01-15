import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Topbar from '../components/topbar.component';

const AppLayout = () => {
  return (
    <div id='app'>
      <Box
        component='main'
        sx={{
          width: '100%',
          overflowY: 'auto',
        }}
      >
        <Topbar />
        <Box p={'24px'} mt={'70px'}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default AppLayout;
