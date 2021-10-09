/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { api, fetchUtil } from '../../services/api';
import './HomePage.css';
import Slider from '../Slider/Slider';
import ModalClient from '../ModalClient/ModalClient';
import CardEvents from '../CardEvents/CardEvents';

export default function HomePage() {
  const [yogaEvents, setYogaEvents] = useState([]);
  const [singleEvent, setSingleEvent] = useState({
    id: '',
    teacher: '',
    title: '',
    startDateTime: '',
    endDateTime: '',
    description: '',
  });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const toTimeStamp = (eventTime) => new Date(eventTime).getTime();
  useEffect(() => {
    try {
      fetchUtil(api.yogaEvents, 'GET')
        .then((res) => res.json())
        .then((data) => {
          const sortedEvents = data.sort((a, b) =>
            toTimeStamp(a.startDateTime) > toTimeStamp(b.startDateTime) ? 1 : -1
          );
          console.log(sortedEvents);
          const [firstEvent] = sortedEvents;
          setYogaEvents(sortedEvents);
          setSingleEvent(firstEvent);
        });
    } catch (error) {
      console.log('SERVER ERROR');
    }
  }, []);

  const onEventClick = ({ target: { dataset } }) => {
    const [clickedElement] = yogaEvents.filter((el) => el.id === dataset.id);
    setSingleEvent(clickedElement);
    console.log(clickedElement);
  };

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
        className="background-half-gray"
        style={{
          paddingBottom: '3rem',
          sm: 'background-gray',
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
                  <Card.Text>Виньяса Йога</Card.Text>
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
        <CardEvents
          yogaEvents={yogaEvents}
          singleEvent={singleEvent}
          onEventClick={onEventClick}
          handleShow={handleShow}
        />
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
      <ModalClient show={show} onHide={handleClose} />
    </>
  );
}
