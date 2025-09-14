import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="position-relative py-5 border-top border-secondary" style={{ zIndex: 10 }}>
      <Container>
        <Row>
          <Col className="text-center">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <img 
                src="/images/vaultwave_logo.png" 
                alt="Vaultwave Logo" 
                style={{ width: '32px', height: '32px' }}
                className="me-3"
              />
              <span className="gradient-text fs-4 fw-bold">vaultwave</span>
            </div>
            <p className="mb-0 text-white" style={{ opacity: '0.8' }}>&copy; 2025 Vaultwave. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
