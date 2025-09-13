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
                      minWidth: '192px', 
                      height: '80px',
                      flexShrink: 0
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
