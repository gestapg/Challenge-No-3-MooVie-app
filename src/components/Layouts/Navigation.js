import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <a href="/">
            <Navbar.Brand>MooVies</Navbar.Brand>
          </a>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
