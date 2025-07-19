import React from 'react';
import { Container, Row, Col, Form, Button, Image, Card, InputGroup } from 'react-bootstrap';
import { Envelope, Lock } from 'react-bootstrap-icons';
function LoginPage() {
  return (
    
    <div className="bg-light d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Container>
        <Card className="shadow-lg border-0 rounded-3 my-5">
          <Row className="g-0">

            {}
            <Col md={6} className="d-none d-md-block">
              {}
              <Image 
                src="/img/face2.jpg" 
                alt="Login Gambar" 
                className="rounded-start w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </Col>

            {}
            <Col md={6}>
              <Card.Body className="p-4 p-sm-5">
                <div className="text-center mb-4">
                  <h3 className="fw-bold">Institut Widya Pratama</h3>
                  <p className="text-muted">Welcome back!</p>
                </div>

                <Form>
                  {}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="icon-email">
                      <Envelope />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      aria-describedby="icon-email"
                      required
                    />
                  </InputGroup>

                  {}
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="icon-password">
                      <Lock />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="icon-password"
                      required
                    />
                  </InputGroup>

                  {}
                  <div className="d-grid">
                    <Button variant="dark" type="submit" size="lg" className="fw-bold rounded-pill">
                      Login
                    </Button>
                  </div>
                </Form>

                {}
                <div className="text-center mt-3">
                  <a href="#" className="text-decoration-none small">Forgot Password?</a>
                </div>

              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default LoginPage;