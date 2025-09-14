import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ECOSYSTEM_SERVICES } from '../../constants';

const ServiceCard = ({ service, isReversed }) => {

  return (
    <Container className="mb-5">
      <Row className={`align-items-center ${isReversed ? 'flex-row-reverse' : ''}`} style={{ minHeight: '400px' }}>
        <Col lg={6} className="mb-4 mb-lg-0 d-flex flex-column justify-content-center">
          <h3 className="display-5 fw-bold text-white mb-2">{service.title}</h3>
          <p className="fs-5 text-electric-blue fw-semibold mb-4">{service.subtitle}</p>
          
          <div className="mb-3">
            <Card className="bg-danger bg-opacity-10 border-start border-danger border-4 border-0 border-start">
              <Card.Body className="py-3">
                <strong className="text-danger">Problem:</strong>
                <span className="text-white ms-2">{service.problem}</span>
              </Card.Body>
            </Card>
          </div>
          
          <div className="mb-3">
            <Card className="bg-warning bg-opacity-10 border-start border-warning border-4 border-0 border-start">
              <Card.Body className="py-3">
                <strong className="text-warning">Solution:</strong>
                <span className="text-white ms-2">{service.solution}</span>
              </Card.Body>
            </Card>
          </div>
          
          <div className="mb-3">
            <Card className="bg-success bg-opacity-10 border-start border-success border-4 border-0 border-start">
              <Card.Body className="py-3">
                <strong className="text-success">Value:</strong>
                <span className="text-white ms-2">{service.value}</span>
              </Card.Body>
            </Card>
          </div>
        </Col>
        
        <Col lg={6} className="d-flex align-items-center justify-content-center">
          <div className="glass-effect rounded-3 overflow-hidden" 
               style={{ height: '320px', width: '100%', maxWidth: '400px' }}>
            <img 
              src={service.image} 
              alt={service.title}
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="position-relative py-5" style={{ zIndex: 10 }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-3 fw-bold gradient-text mb-4">
              The Vaultwave Ecosystem
            </h2>
            <p className="fs-4 text-white mx-auto" style={{ maxWidth: '600px', opacity: '0.9' }}>
              Three powerful platforms united by blockchain technology and community trust
            </p>
          </Col>
        </Row>

        {ECOSYSTEM_SERVICES.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            isReversed={index === 1}
          />
        ))}
      </Container>
    </section>
  );
};

export default EcosystemSection;
