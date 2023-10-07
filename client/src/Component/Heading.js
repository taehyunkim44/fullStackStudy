import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Heading() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">나만의 게시판</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              home
            </Link>
            <Link
              to="/upload"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              upload
            </Link>
            <Link
              to="/login"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
