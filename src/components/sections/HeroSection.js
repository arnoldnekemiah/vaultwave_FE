import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="position-relative d-flex align-items-center justify-content-center" 
             style={{ minHeight: '100vh', zIndex: 10 }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <div className="mb-4">
              <span className="glass-effect px-4 py-2 rounded-pill text-electric-blue fw-medium">
                🚀 The Future of Finance is Here
              </span>
            </div>
            
            <h1 className="display-1 fw-bold mb-4 gradient-text" style={{ lineHeight: '1.1' }}>
              Revolutionize
              <br />
              Digital Finance
            </h1>
            
            <p className="fs-4 text-light mb-5 mx-auto" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
              Money moving quickly, securely, and directly between people without unnecessary middlemen. 
              Experience the power of blockchain-backed trust and community-driven participation.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button 
                href="#waitlist" 
                className="btn-vaultwave hover-scale hover-glow px-4 py-3 fs-5"
              >
                Join the Revolution
                <ChevronRight className="ms-2" size={20} />
              </Button>
              <Button 
                variant="outline-light" 
                className="btn-outline-vaultwave px-4 py-3 fs-5"
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
