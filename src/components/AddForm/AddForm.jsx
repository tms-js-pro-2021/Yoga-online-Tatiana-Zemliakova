import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { api } from '../../services/api';

export default function AddForm() {
  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      description: '',
      startDateTime: '',
      endDateTime: '',
      customFields: '',
    },
    onSubmit: (values) => {
      fetch(api.yogaEvents, {
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
          });
        } else res.text().then((errorString) => alert(errorString));
      });
      formik.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ width: 400, display: 'flex', flexDirection: 'column' }}>
          <TextField
            required
            label="id"
            name="id"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1 }}
            error={formik.touched.id && !!formik.errors.id}
            helperText={formik.touched.id && formik.errors.id}
          />
          <TextField
            required
            label="Заниятие"
            type="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1 }}
            error={formik.touched.id && !!formik.errors.id}
            helperText={formik.touched.id && formik.errors.id}
          />
          <TextField
            required
            label="id"
            name="id"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1 }}
            error={formik.touched.id && !!formik.errors.id}
            helperText={formik.touched.id && formik.errors.id}
          />
          <TextField
            required
            label="id"
            name="id"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1 }}
            error={formik.touched.id && !!formik.errors.id}
            helperText={formik.touched.id && formik.errors.id}
          />
          <Button variant="contained" type="submit" sx={{ m: 1 }}>
            добавить занятие в расписание
          </Button>
        </div>
      </form>
    </>
  );
}
