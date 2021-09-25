/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  FloatingLabel,
} from 'react-bootstrap';
import React, { useState } from 'react';
import './HomePage.css';
import Slider from '../Slider/Slider';

export default function HomePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Slider />
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '2rem',
          paddingBottom: '3rem',
          color: '#4D1919',
        }}
      >
        <h1 style={{ fontWeight: 'bold' }}>Преподаватели</h1>
      </Container>
      <Container
        fluid
        className="background-gray"
        style={{
          paddingBottom: '3rem',
        }}
      >
        <Container>
          <Row>
            <Col sm={4}>
              <Card
                className="text-center"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                }}
              >
                <Card.Img variant="top" src="/images/teacher1.png" />
                <Card.Body>
                  <Card.Title>Инна Рыбчинская</Card.Title>
                  <Card.Text>Кундалини Йога</Card.Text>
                  <Button variant="outline-light">
                    <Card.Link
                      href="/teachers"
                      style={{ color: '#FFFFFF', textDecoration: 'none' }}
                    >
                      Подробнее
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                className="text-center"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                }}
              >
                <Card.Img variant="top" src="/images/teacher2.png" />
                <Card.Body>
                  <Card.Title>Василина Солтан</Card.Title>
                  <Card.Text>Сукшма Вьяяма</Card.Text>
                  <Button variant="outline-light">
                    <Card.Link
                      href="/teachers"
                      style={{ color: '#FFFFFF', textDecoration: 'none' }}
                    >
                      Подробнее
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                className="text-center"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                }}
              >
                <Card.Img variant="top" src="/images/teacher3.png" />
                <Card.Body>
                  <Card.Title>Дарья Табольская</Card.Title>
                  <Card.Text>Виньяса Флоу Йога</Card.Text>
                  <Button variant="outline-light">
                    <Card.Link
                      href="/teachers"
                      style={{ color: '#FFFFFF', textDecoration: 'none' }}
                    >
                      Подробнее
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        style={{
          marginTop: '4.5rem',
          paddingTop: '6rem',
          paddingBottom: '8rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          backgroundImage: 'url(' + 'images/back2.png' + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Row>
          <Col md={6}>
            <Card
              style={{
                marginBottom: '2rem',
                paddingTop: '4.5rem',
                paddingBottom: '5rem',
                paddingLeft: '2rem',
                paddingRight: '1rem',
                height: '30rem',
                background: 'rgba(229, 229, 229, 0.9)',
                color: '#4D1919',
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              style={{
                paddingTop: '4.5rem',
                paddingBottom: '5rem',
                paddingLeft: '2rem',
                paddingRight: '1rem',
                height: '30rem',
                background: 'rgba(77, 25, 25, 0.9)',
                color: '#FFFFFF',
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="outline-light" onClick={handleShow}>
                  Записаться
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          paddingTop: '5.4rem',
          paddingBottom: '7rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          backgroundImage: 'url(' + 'images/water.png' + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Row>
          <Col xs={12} md={6} xl={4}>
            <Card
              className="text-center"
              style={{
                paddingTop: '4.5rem',
                paddingBottom: '5rem',
                paddingLeft: '2rem',
                paddingRight: '1rem',
                background: 'rgba(116, 138, 133, 0.8)',
                color: '#FFFFFF',
              }}
            >
              <Card.Body>
                <Card.Text>
                  <p>
                    Контакты
                    <br />
                    Наш адрес / Location:
                    <br />
                    пр-т Победителей, 133, г. Минск;
                    <br />
                    133 Pieramožcaŭ Ave, Minsk
                  </p>
                  <p>
                    Время работы / Open:
                    <br />
                    Пн. - пт. / Mon. - Fri.: 7:00 – 22:00,
                    <br />
                    Сб. / Sat.: 8:00 – 19:00,
                    <br />
                    Вс. / Sun.: 9:00 – 19:00.
                    <br />
                  </p>
                  <p>
                    Email:
                    <br />
                    info@yoga-club.by
                  </p>
                  <p>
                    Тел. / Tel. (A1):
                    <br />
                    +375 (29) 133-33-33
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: '#4D1919',
              fontWeight: 'bold',
            }}
          >
            Введите ваши данные
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="validationCustom">
              <Form.Label>Напишите Ваше имя</Form.Label>
              <Form.Control type="text" placeholder="Ваше имя" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Напишите Ваш e-mail</Form.Label>
              <Form.Control type="email" placeholder="Ваш e-mail" />
              <Form.Text className="text-muted">
                Мы не передадим ваши данные никому другому.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Предупредите меня за 2 часа" />
            </Form.Group>
            <FloatingLabel>
              <Button
                variant="outline-dark"
                type="submit"
                style={{
                  background: '#4D1919',
                  color: '#FFFFFF',
                }}
              >
                Записаться на занятие
              </Button>
            </FloatingLabel>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
