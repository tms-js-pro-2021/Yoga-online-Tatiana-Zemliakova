import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Container fluid style={{ backgroundColor: '#4D1919', color: '#E5E5E5' }}>
      <Container
        style={{
          paddingTop: '2rem',
        }}
      >
        <Link to="/">
          <img
            src="/images/logo.svg"
            width="130"
            height="57"
            mt="38px"
            mb="12px"
            className="d-inline-block align-top"
            alt=""
          ></img>
        </Link>
      </Container>
      <Container
        style={{
          paddingTop: '1rem',
          paddingBottom: '7rem',
          paddingLeft: '0',
          color: '#E5E5E5',
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Col sm={6}>
            <p
              style={{
                color: '#E5E5E5',
                textAlign: 'center',
              }}
            >
              © 2021 Yoga Club.
              <br />
              Все права защищены. ОАО «КЛАБ ЙОГА»
            </p>
          </Col>
          <Col sm={6}>
            <p
              style={{
                color: '#E5E5E5',
                textAlign: 'center',
              }}
            >
              Пр-т Победителей, г. Минск
              <br />
              +375 (25) 635 87 52
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
