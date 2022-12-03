import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/Store';
import style from '../navebar/navbar.module.scss';

export default function Navbar() {
  const { userInfo, setUserInfo } = useStore();
  const theme = createTheme({
    typography: {
      h1: {},
      h2: {
        fontSize: '1.8rem',
        fontWeight: 700,
        textTransform: 'capitalize',
        fontStyle: 'italic',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#8c9dff',
      },
      secondary: {
        main: '#ff878d',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar className={style.toolbar}>
          <Box className={style.logo}>
            <Link to='/'>
              <img src='' alt='' />
              <Typography color='#203040' variant='h2'>
                Dashbord
              </Typography>
            </Link>
          </Box>
          <Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
