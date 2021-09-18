import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navibar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="images/logo.svg"
                width="130"
                height="57"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              ></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
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
            <Nav>
              <Button variant="light">
                <Link to="/login">login</Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
