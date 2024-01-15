import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <AppBar component={'nav'}>
      <Toolbar>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <Typography variant='h6'>Hello world</Typography>
          <Box>
            <NavLink to={'/'} end>
              {({ isActive }) => (
                <Button
                  variant={'text'}
                  sx={{
                    color: isActive ? 'white' : '#003060',
                    marginRight: 1,
                  }}
                >
                  {'Home'}
                </Button>
              )}
            </NavLink>
            <NavLink to={'/student-form'} end>
              {({ isActive }) => (
                <Button
                  variant={'text'}
                  sx={{
                    color: isActive ? 'white' : '#003060',
                    marginRight: 1,
                  }}
                >
                  {'Student form'}
                </Button>
              )}
            </NavLink>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
