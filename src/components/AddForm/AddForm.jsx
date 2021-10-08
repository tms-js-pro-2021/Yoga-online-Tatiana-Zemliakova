import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { api } from '../../services/api';

export default function AddForm({ handleDelete }) {
  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      startDateTime: '',
      endDateTime: '',
      description: '',
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
            id="outlined-basic"
            label="teacher"
            variant="outlined"
            required
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              marginBottom: '1rem',
            }}
          />
          <TextField
            id="outlined-basic"
            label="title"
            variant="outlined"
            required
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              marginBottom: '1rem',
            }}
          />
          <TextField
            id="outlined-basic"
            label="start time"
            variant="outlined"
            required
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              marginBottom: '1rem',
            }}
          />
          <TextField
            id="outlined-basic"
            label="end time"
            variant="outlined"
            required
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              marginBottom: '1rem',
            }}
          />
          <TextField
            id="outlined-basic"
            label="description"
            variant="outlined"
            required
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              marginBottom: '1rem',
            }}
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              marginBottom: '1rem',
            }}
          >
            добавить занятие в расписание
          </Button>
          <Button
            onClick={handleDelete}
            variant="outline-dark"
            type="submit"
            style={{
              marginBottom: '1rem',
              background: '#4D1919',
              color: '#FFFFFF',
            }}
          >
            удалить это занятие
          </Button>
        </div>
      </form>
    </>
  );
}
