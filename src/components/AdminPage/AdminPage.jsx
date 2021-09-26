/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Table,
  Container,
  Card,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';

const tablines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function AdminPage() {
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
            <Button
              variant="secondary"
              style={{
                marginBottom: '2rem',
              }}
            >
              Добавить
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
              <th>дата</th>
              <th>время</th>
              <th>преподаватель</th>
              <th>занятие</th>
              <th>описание</th>
              <th>действие</th>
            </tr>
          </thead>
          <tbody>
            {tablines.map((element) => (
              <tr item key={element}>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
