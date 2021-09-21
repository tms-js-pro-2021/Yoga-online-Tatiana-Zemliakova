import React from 'react';
import { Container, Nav, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function Footer() {
  const Styles = styled.div`
    a,
    .navbar-brand,
    .nav-link {
      color: white;
      text-decoration: none;
      &:hover {
        color: red;
      }
    }
  `;

  return (
    <Styles>
      <Container fluid style={{ backgroundColor: '#4D1919', color: '#E5E5E5' }}>
        <Row>
          <Col sm={12}>
            <Link to="/">
              <img
                src="/images/logo.svg"
                width="130"
                height="57"
                mt="38px"
                mb="12px"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              ></img>
            </Link>
            <Container
              fluid
              style={{
                display: 'flex',

                paddind: '3rem',
                color: '#E5E5E5',
              }}
            >
              <p>© 2021 Yoga Club. Все права защищены ОАО «КЛАБ ЙОГА»</p>
              <Container>
                <Nav
                  className="me-auto"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddind: '3rem',
                  }}
                >
                  <Nav.Link>
                    <Link to="/about">О нас</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/teachers">Преподаватели</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/timetable">Расписание</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contacts">Контакты</Link>
                  </Nav.Link>
                </Nav>
              </Container>
              <p>Пр-т Победителей, г. Минск, +375 (25) 635 87 52</p>
            </Container>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
