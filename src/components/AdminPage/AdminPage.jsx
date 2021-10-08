/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import {
  Table,
  Container,
  Card,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';
import { api, fetchUtil } from '../../services/api';
import ModalAdmin from '../ModalAdmin';

export default function AdminPage() {
  const [yogaEvents, setYogaEvents] = useState([]);
  const [yogaTeachers, setYogaTeachers] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    try {
      fetchUtil(api.yogaEvents, 'GET')
        .then((res) => res.json())
        .then((data) => setYogaEvents(data));
    } catch (error) {
      console.log('SERVER ERROR');
    }
  }, []);

  useEffect(() => {
    try {
      fetchUtil(api.yogaTeahers, 'GET')
        .then((res) => res.json())
        .then((data) => setYogaTeachers(data));
    } catch (error) {
      console.log('SERVER ERROR');
    }
  }, []);

  const handleDeleteEvent = (id) => {
    try {
      fetchUtil(api.yogaEvents, 'DELETE').then(() => {
        const newYogaEvents = [...yogaEvents];
        setYogaEvents(newYogaEvents.filter((el) => id !== el.id));
        console.log(id);
      });
    } catch (error) {
      console.log('SERVER ERROR');
    }
  };

  const handleAddEvent = ({
    id,
    teacher,
    title,
    startDateTime,
    endDateTime,
    description,
  }) => {
    const newEvent = {
      id,
      teacher,
      title,
      startDateTime,
      endDateTime,
      description,
    };
    try {
      fetchUtil(api.yogaEvents, 'POST', JSON.stringify(newEvent))
        .then((res) => res.json())
        .then((res) => {
          setYogaEvents([yogaEvents, { ...newEvent, ...res }]);
        });
    } catch (error) {
      console.log('SERVER ERROR');
    }
  };

  return (
    <>
      <Container
        fluid
        style={{
          paddingRight: '2rem',
          paddingLeft: '2rem',
          marginTop: '2rem',
        }}
      >
        <Card>
          <Card.Body>
            <Card.Title
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '2rem',
                marginTop: '2rem',
              }}
            >
              ЗАНЯТИЯ
            </Card.Title>
            <Form
              className="d-flex"
              style={{
                marginBottom: '2rem',
              }}
            >
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">Search</Button>
            </Form>
            <Button variant="secondary" onClick={handleShow}>
              добавить занятие в расписание
            </Button>
          </Card.Body>
        </Card>
      </Container>
      <Container
        fluid
        style={{
          paddingRight: '2rem',
          paddingLeft: '2rem',
          marginTop: '2rem',
        }}
      >
        <Table bordered hover responsive="sm">
          <thead>
            <tr>
              <th>преподаватель</th>
              <th>занятие</th>
              <th>время начала</th>
              <th>время окончания</th>
              <th>описание</th>
              <th>действие</th>
            </tr>
          </thead>
          <tbody>
            {yogaEvents.map((el) => {
              const convertTeacherIdToName = () => {
                const [teacher] = yogaTeachers.filter(
                  (teacher) => teacher.id === el.teacher
                );
                return teacher?.name;
              };
              return (
                <tr item key={el.id}>
                  <td>{convertTeacherIdToName()}</td>
                  <td>{el.title}</td>
                  <td>{el.startDateTime}</td>
                  <td>{el.endDateTime}</td>
                  <td>{el.description}</td>
                  <td>
                    <Button variant="secondary" onClick={handleShow}>
                      Изменить
                    </Button>
                  </td>
                  <ModalAdmin
                    show={show}
                    onHide={handleClose}
                    handleDeleteEvent={handleDeleteEvent}
                    handleAddEvent={handleAddEvent}
                    el={el}
                  />
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
