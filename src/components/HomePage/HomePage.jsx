/* eslint-disable import/no-unresolved */
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import React from 'react';
import './HomePage.css';
import Slider from '../Slider/Slider';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Slider />
      <Container>
        <h1>Преподаватели</h1>
      </Container>
      <Container fluid className="background-gray">
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
                  <Card.Text>Йога для начинающих</Card.Text>
                  <Button variant="outline-light">
                    Подробнее
                    <Nav.Link>
                      <Link to="/teachers"></Link>
                    </Nav.Link>
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
                  <Card.Text>
                    Сукшма Вьяяма - мощная, простая практика в традиции
                    Дхирендры Брахмачари.
                  </Card.Text>
                  <Button variant="outline-light">
                    Подробнее
                    <Nav.Link>
                      <Link to="/teachers"></Link>
                    </Nav.Link>
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
                  <Card.Text>
                    Йогатерапия - для тех, кто имеет ограничения здоровья.
                  </Card.Text>
                  <Button variant="outline-light">Подробнее</Button>
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
                <Card.Link href="#">Card Link</Card.Link>
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
                <Button variant="outline-light">Подробнее</Button>
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
    </>
  );
}
