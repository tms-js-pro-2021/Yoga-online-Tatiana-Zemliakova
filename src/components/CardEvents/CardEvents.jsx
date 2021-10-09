import { Row, Col, Card, Button } from 'react-bootstrap';
import React from 'react';

export default function CardEvents({
  onEventClick,
  handleShow,
  yogaEvents,
  singleEvent,
}) {
  const convertDateTime = (date) => date.substr(0, 16).replace('T', ' ');

  return (
    <Row>
      <Col md={6}>
        <Card
          style={{
            marginBottom: '2rem',
            paddingTop: '4.5rem',
            paddingBottom: '5rem',
            paddingLeft: '2rem',
            paddingRight: '1rem',
            height: '24rem',
            background: 'rgba(229, 229, 229, 0.9)',
            color: '#4D1919',
          }}
        >
          <Card.Body
            style={{
              overflowY: 'scroll',
            }}
          >
            {yogaEvents.map((el) => (
              <div item key={el.id} data-id={el.id} onClick={onEventClick}>
                {convertDateTime(el.startDateTime)}
                <br />
                {el.title}
              </div>
            ))}
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
            height: '24rem',
            background: 'rgba(77, 25, 25, 0.9)',
            color: '#FFFFFF',
          }}
        >
          <Card.Body
            style={{
              overflowY: 'scroll',
            }}
          >
            <div>{singleEvent.title}</div>
            <Button variant="outline-light" onClick={handleShow}>
              Записаться
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
