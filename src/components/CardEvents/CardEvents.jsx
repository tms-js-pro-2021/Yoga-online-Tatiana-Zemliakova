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
          className="text-center"
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
              overflowY: 'auto',
            }}
          >
            {yogaEvents.map((el) => (
              <>
                <Card.Title
                  style={{
                    cursor: 'pointer',
                  }}
                  item
                  key={el.id}
                  data-id={el.id}
                  onClick={onEventClick}
                >
                  {el.title}
                </Card.Title>
                <Card.Text
                  style={{ marginBottom: '1.5rem' }}
                  item
                  key={el.id}
                  data-id={el.id}
                >
                  {convertDateTime(el.startDateTime)}
                </Card.Text>
              </>
            ))}
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card
          className="text-center"
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
              overflowY: 'auto',
            }}
          >
            <Card.Title style={{ marginBottom: '2rem' }}>
              {singleEvent.title}
            </Card.Title>
            <Card.Text style={{ marginBottom: '2rem' }}>
              {singleEvent.description}
            </Card.Text>
            <Button variant="outline-light" onClick={handleShow}>
              ????????????????????
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
