import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navibar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="images/logo.svg"
              width="130"
              height="57"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" color="#531717">
              <Nav.Link href="#about">О нас</Nav.Link>
              <Nav.Link href="#teahers">Преподаватели</Nav.Link>
              <Nav.Link href="#table">Расписание</Nav.Link>
              <Nav.Link href="#contacts">Контакты</Nav.Link>
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
