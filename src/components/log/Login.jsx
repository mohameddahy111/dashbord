import {
  Box,
  Button,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useStore } from '../../context/Store';

export default function Login() {
  const { userInfo, setUserInfo , changeEmailFun } = useStore();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string('enter your email').email().required('email is required'),
    password: yup
      .string('enter your password')
      .min(6, 'password vild')
      .required('password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: values => {
      setUserInfo(true);
      navigate('/home');
      changeEmailFun()
    },
  });
  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        margin: '50px auto',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <List sx={{ width: '100%' }}>
          <ListItem>
            <Typography
              align='center'
              sx={{
                textTransform: 'capitalize',
                fontSize: '2rem',
                fontWeight: 700,
                width: '100%',
              }}
              variant='h2'
            >
              log in
            </Typography>
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: 'email' }}
              label='E-mail'
              name='email'
              fullWidth
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              inputProps={{ type: 'password' }}
              label='Password'
              name='password'
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onChange={formik.handleChange}
            />
          </ListItem>
          <ListItem>
            <Button variant='contained' fullWidth type='submit'>
              <Typography
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                }}
                variant='h2'
              >
                log in
              </Typography>
            </Button>
          </ListItem>
        </List>
      </form>
    </Paper>
  );
}
