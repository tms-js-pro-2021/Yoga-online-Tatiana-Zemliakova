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
import { api } from '../../services/api';
import ModalDelete from '../ModalDelete';
import AddForm from '../AddForm';

export default function AdminPage() {
  const [yogaEvents, setYogaEvents] = useState([]);
  const [yogaTeachers, setYogaTeachers] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    try {
      fetch(api.yogaEvents, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => setYogaEvents(data));
    } catch (error) {
      console.log('SERVER ERROR');
    }
  }, []);

  useEffect(() => {
    try {
      fetch(api.yogaTeahers, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => setYogaTeachers(data));
    } catch (error) {
      console.log('SERVER ERROR');
    }
  }, []);

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
            <AddForm />
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
            {yogaEvents.map((el) => (
              <tr item key={el.id}>
                <td>{el.teacher}</td>
                <td>{el.title}</td>
                <td>{el.startDateTime}</td>
                <td>{el.endDateTime}</td>
                <td>{el.description}</td>
                <td>
                  <Button variant="danger" onClick={handleShow}>
                    Удалить
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <ModalDelete show={show} onHide={handleClose} />
    </>
  );
}
