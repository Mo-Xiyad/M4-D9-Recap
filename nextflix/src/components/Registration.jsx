import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

const Registration = ({
  setName,
  name,
  setSurname,
  surname,
  setEmail,
  email,
  setPassword,
  password,
  setConfirmPassword,
  confirmPassword,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const formCkeck = async () => {
    if (
      name.length > 2 &&
      surname.length > 2 &&
      email.length > 2 &&
      password.length > 2 &&
      confirmPassword.length > 2
    ) {
      return true;
    }
  };
  useEffect(() => {
    formCkeck();
  }, [name, surname, email, password, confirmPassword]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Surname </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter surname "
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" disabled={!formCkeck()}>
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
