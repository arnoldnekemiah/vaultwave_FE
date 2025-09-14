import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PARTNERS } from '../../constants';

const PartnersSection = () => {
  return (
    <section id="partners" className="position-relative py-5 glass-effect" style={{ zIndex: 10 }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4 fw-bold gradient-text mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="fs-5 text-white mx-auto" style={{ maxWidth: '600px', opacity: '0.9' }}>
              Join the ecosystem alongside established DeFi protocols and blockchain innovators
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <div className="partners-container">
              <div className="partners-scroll d-flex gap-4">
                {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                  <div 
                    key={index} 
                    className="glass-effect rounded d-flex align-items-center justify-content-center hover-scale"
                    style={{ 
                      minWidth: '200px', 
                      height: '80px',
                      flexShrink: 0,
                      margin: '0 8px'
                    }}
                  >
                    <span className="text-white fw-semibold">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PartnersSection;
