/* eslint-disable import/no-unresolved */
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React from 'react';
import './HomePage.css';
import Slider from '../Slider/Slider';

export default function HomePage() {
  return (
    <>
      <Slider />
      <Container>
        <h1>Преподаватели</h1>
      </Container>
      <Container fluid className="background-gray">
        <Row>
          <Col>
            <Card style={{ width: '18rem', hight: '36rem' }}>
              <Card.Img variant="top" src="/images/teacher1.png" />
              <Card.Body>
                <Card.Title>Инна Рыбчинская</Card.Title>
                <Card.Text>Йога для начинающих</Card.Text>
                <Button variant="outline-light">Записаться</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', hight: '36rem' }}>
              <Card.Img variant="top" src="/images/teacher2.png" />
              <Card.Body>
                <Card.Title>Василина Солтан</Card.Title>
                <Card.Text>
                  Сукшма Вьяяма - мощная, простая практика в традиции Дхирендры
                  Брахмачари.
                </Card.Text>
                <Button variant="outline-light">Записаться</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', hight: '36rem' }}>
              <Card.Img variant="top" src="/images/teacher3.png" />
              <Card.Body>
                <Card.Title>Дарья Табольская</Card.Title>
                <Card.Text>
                  Йогатерапия - для тех, кто имеет ограничения здоровья.
                </Card.Text>
                <Button variant="outline-light">Записаться</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <img
          className="d-block w-100"
          height="900px"
          src="images/back2.png"
          alt=""
        />
      </Container>
    </>
  );
}
