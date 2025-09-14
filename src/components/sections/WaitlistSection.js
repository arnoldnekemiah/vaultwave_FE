import React from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { Check, Copy, Twitter, Send, Linkedin } from 'lucide-react';
import { useWaitlist } from '../../hooks/useWaitlist';
import { SOCIAL_LINKS } from '../../constants';

const WaitlistSection = () => {
  const {
    email,
    setEmail,
    walletAddress,
    setWalletAddress,
    isSubmitted,
    isLoading,
    error,
    waitlistPosition,
    referralLink,
    totalReferrals,
    copied,
    handleSubmit,
    copyReferralLink,
    shareToTwitter,
    setError
  } = useWaitlist();

  return (
    <section id="waitlist" className="position-relative py-5" style={{ zIndex: 10 }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="glass-effect border-0 rounded-4 p-4">
              <Card.Body>
                {!isSubmitted ? (
                  <div className="text-center">
                    <h2 className="display-4 fw-bold gradient-text mb-4">
                      Join the Waitlist
                    </h2>
                    <p className="fs-5 text-white mb-5 mx-auto" style={{ maxWidth: '600px', opacity: '0.9', lineHeight: '1.6' }}>
                      Be among the first to experience the future of decentralized finance. Early access comes with exclusive benefits and priority platform access.
                    </p>
                    
                    <Row className="justify-content-center">
                      <Col md={10} lg={8}>
                        {error && (
                          <div className="alert alert-danger mb-4" role="alert">
                            {error}
                            <button 
                              type="button" 
                              className="btn-close float-end" 
                              onClick={() => setError(null)}
                            ></button>
                          </div>
                        )}
                        <Form>
                          <Row className="g-3">
                            <Col md={6}>
                              <Form.Group>
                                <Form.Control
                                  type="email"
                                  placeholder="Email Address"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="glass-effect border-0 text-white p-3 fs-5"
                                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '12px' }}
                                  disabled={isLoading}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group>
                                <Form.Control
                                  type="text"
                                  placeholder="EVM Wallet Address (0x...)"
                                  value={walletAddress}
                                  onChange={(e) => setWalletAddress(e.target.value)}
                                  className="glass-effect border-0 text-white p-3 fs-5"
                                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '12px' }}
                                  disabled={isLoading}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row className="mt-4">
                            <Col>
                              <Button
                                onClick={handleSubmit}
                                className="btn-vaultwave w-100 py-3 fs-5 hover-scale hover-glow"
                                disabled={isLoading}
                                style={{ borderRadius: '12px' }}
                              >
                            {isLoading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Joining Waitlist...
                              </>
                            ) : (
                              <span>Join Waitlist</span>
                            )}
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="bg-success bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                         style={{ width: '80px', height: '80px' }}>
                      <Check size={40} className="text-success" />
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="display-6 fw-bold text-white mb-3">Welcome to Vaultwave!</h3>
                      <p className="text-white mb-2" style={{ opacity: '0.9' }}>You're now on the waitlist</p>
                      <div className="display-4 fw-bold text-electric-blue">
                        Position #{waitlistPosition ? waitlistPosition.toLocaleString() : '---'}
                      </div>
                      {totalReferrals > 0 && (
                        <p className="text-success mt-2">
                          🎉 You've referred {totalReferrals} {totalReferrals === 1 ? 'person' : 'people'}!
                        </p>
                      )}
                    </div>

                    <Card className="glass-effect border-0 mb-4">
                      <Card.Body>
                        <h4 className="fs-5 fw-semibold text-white mb-3">Your Referral Link</h4>
                        <InputGroup>
                            <Form.Control
                              value={referralLink}
                              readOnly
                              className="glass-effect border-0 text-electric-blue"
                              style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '12px' }}
                            />
                          <Button
                            onClick={copyReferralLink}
                            className="btn-vaultwave"
                          >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            <span className="ms-2">{copied ? 'Copied!' : 'Copy'}</span>
                          </Button>
                        </InputGroup>
                      </Card.Body>
                    </Card>

                    <div>
                      <h4 className="fs-5 fw-semibold text-white mb-3">Share & Earn</h4>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <Button
                          onClick={shareToTwitter}
                          className="btn-vaultwave d-flex align-items-center"
                        >
                          <Twitter size={20} />
                          <span className="ms-2">Share on X</span>
                        </Button>
                        <Button
                          href={SOCIAL_LINKS.TELEGRAM}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-vaultwave d-flex align-items-center"
                        >
                          <Send size={20} />
                          <span className="ms-2">Telegram</span>
                        </Button>
                        <Button
                          href={SOCIAL_LINKS.LINKEDIN}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-vaultwave d-flex align-items-center"
                        >
                          <Linkedin size={20} />
                          <span className="ms-2">LinkedIn</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WaitlistSection;
