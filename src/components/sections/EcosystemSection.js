import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Users, TrendingUp, Zap } from 'lucide-react';
import { ECOSYSTEM_SERVICES } from '../../constants';

const IconComponent = ({ iconName, size = 32 }) => {
  const icons = {
    Users: Users,
    TrendingUp: TrendingUp,
    Zap: Zap
  };
  
  const Icon = icons[iconName];
  return Icon ? <Icon size={size} /> : null;
};

const ServiceCard = ({ service, isReversed }) => {
  const getIconColor = (serviceId) => {
    switch(serviceId) {
      case 'lending': return 'text-primary';
      case 'marketplace': return 'text-info';
      case 'swaps': return 'text-success';
      default: return 'text-primary';
    }
  };

  return (
    <Container className="mb-5">
      <Row className={`align-items-center ${isReversed ? 'flex-row-reverse' : ''}`}>
        <Col lg={6} className="mb-4 mb-lg-0">
          <div className={`glass-effect p-4 rounded mb-4 d-inline-block`}>
            <IconComponent iconName={service.icon} size={32} />
          </div>
          <h3 className="display-5 fw-bold text-white mb-4">{service.title}</h3>
          
          <div className="mb-3">
            <Card className="bg-danger bg-opacity-10 border-start border-danger border-4 border-0 border-start">
              <Card.Body className="py-3">
                <strong className="text-danger">Problem:</strong>
                <span className="text-light ms-2">{service.problem}</span>
              </Card.Body>
            </Card>
          </div>
          
          <div className="mb-3">
            <Card className="bg-warning bg-opacity-10 border-start border-warning border-4 border-0 border-start">
              <Card.Body className="py-3">
                <strong className="text-warning">Solution:</strong>
                <span className="text-light ms-2">{service.solution}</span>
              </Card.Body>
            </Card>
          </div>
          
          <div className="mb-3">
            <Card className="bg-success bg-opacity-10 border-start border-success border-4 border-0 border-start">
              <Card.Body className="py-3">
                <strong className="text-success">Value:</strong>
                <span className="text-light ms-2">{service.value}</span>
              </Card.Body>
            </Card>
          </div>
        </Col>
        
        <Col lg={6}>
          <div className={`glass-effect rounded-3 d-flex align-items-center justify-content-center ${getIconColor(service.id)}`} 
               style={{ height: '320px' }}>
            <div className="text-center">
              <IconComponent iconName={service.icon} size={64} />
              <p className="fw-semibold mt-3 mb-0">{service.title}</p>
            </div>
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
            <p className="fs-4 text-light mx-auto" style={{ maxWidth: '600px' }}>
              Three powerful platforms united by blockchain technology and community trust
            </p>
          </Col>
        </Row>

        {ECOSYSTEM_SERVICES.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            isReversed={index === 1} // Middle service (marketplace) will be reversed
          />
        ))}
      </Container>
    </section>
  );
};

export default EcosystemSection;
