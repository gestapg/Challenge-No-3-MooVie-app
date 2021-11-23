import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <a href="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand>MooVies</Navbar.Brand>
          </a>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
