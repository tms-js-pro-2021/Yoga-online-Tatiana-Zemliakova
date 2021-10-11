import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { api, fetchUtil } from '../../services/api';

// const [yogaEvents, setYogaEvents] = useState([]);
// const [yogaTeachers, setYogaTeachers] = useState([]);

export default function AddForm({ handleDeleteEvent, handleAddEvent, el }) {
  const formik = useFormik({
    initialValues: {
      id: el.id,
      teacher: el.teacher,
      title: el.title,
      startDateTime: el.startDateTime,
      endDateTime: el.endDateTime,
      description: el.description,
    },
    onSubmit: (values) => {
      console.log(values);
      fetchUtil(api.yogaEvents, 'POST', values)
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
    validateOnChange: false,
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
            value={formik.values.teacher}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="teacher"
            style={{
              marginBottom: '1rem',
            }}
          />
          <TextField
            id="outlined-basic"
            label="title"
            variant="outlined"
            required
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="title"
            style={{
              marginBottom: '1rem',
            }}
          />
          <TextField
            id="outlined-basic"
            label="Время начала"
            variant="outlined"
            name="startDateTime"
            required
            value={formik.values.startDateTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              marginBottom: '1rem',
            }}
          />
          <TextField
            id="outlined-basic"
            label="Время окончания"
            variant="outlined"
            name="endDateTime"
            required
            value={formik.values.endDateTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              marginBottom: '1rem',
            }}
          />
          <TextField
            id="outlined-basic"
            label="Описание"
            variant="outlined"
            required
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              marginBottom: '1rem',
            }}
          />
          <Button
            onClick={handleAddEvent}
            variant="contained"
            type="submit"
            style={{
              marginBottom: '1rem',
            }}
          >
            добавить занятие в расписание
          </Button>
          <Button
            onClick={handleDeleteEvent}
            variant="contained"
            type="submit"
            color="error"
            style={{
              marginBottom: '1rem',
            }}
          >
            удалить это занятие
          </Button>
        </div>
      </form>
    </>
  );
}
