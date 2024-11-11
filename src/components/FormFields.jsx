import { useState } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap'; // Use OverlayTrigger for tooltips
import { Form, Button, Container, Row, Col } from 'react-bootstrap'; // Import React Bootstrap components

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log({ username, email, password });
  };

  // Create tooltip content for form fields
  const renderTooltip = (message) => (
    <Tooltip id="tooltip">{message}</Tooltip>
  );

  return (
    <Container>
      <h1 className="my-4">Registration Form</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="username">
              <Form.Label>
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip('Enter a unique username.')}
                >
                  <span>Username:</span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="email">
              <Form.Label>
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip('Please provide a valid email address.')}
                >
                  <span>Email:</span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="password">
              <Form.Label>
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip('Password must be at least 8 characters long.')}
                >
                  <span>Password:</span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">Register</Button>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
