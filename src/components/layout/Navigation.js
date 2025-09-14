import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="position-relative" style={{ zIndex: 10 }}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img 
            src="/images/vaultwave_logo.png" 
            alt="Vaultwave Logo" 
            style={{ width: '40px', height: '40px' }}
            className="me-3"
          />
          <span className="gradient-text fs-3 fw-bold">vaultwave</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#ecosystem" className="text-light me-4 hover-scale">Ecosystem</Nav.Link>
            <Nav.Link href="#partners" className="text-light me-4 hover-scale">Partners</Nav.Link>
            <Nav.Link href="#waitlist" className="text-light hover-scale">Join Waitlist</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
