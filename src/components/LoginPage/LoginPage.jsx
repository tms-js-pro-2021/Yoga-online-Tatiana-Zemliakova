/* eslint-disable import/no-unresolved */
import React from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { TextField, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Navibar from '../Navibar';

export default function LoginPage() {
  const { push } = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signin', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data);
            push('/admin');
          });
          //сохранить токен, как todolist
        } else res.text().then((errorString) => alert(errorString));
      });
      formik.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: object({
      email: string().email('некорретный e-mail'),
      password: string().required(),
    }),
  });

  return (
    <>
      <Navibar />
      <Box
        m={2}
        style={{
          height: '100vh',
          width: '100vw',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div style={{ width: 200, display: 'flex', flexDirection: 'column' }}>
            <TextField
              required
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={{ m: 1 }}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              required
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={{ m: 1 }}
              error={formik.touched.password && !!formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button variant="contained" type="submit" sx={{ m: 1 }}>
              login
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
}
