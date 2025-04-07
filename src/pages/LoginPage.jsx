import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <Container className="login-container">
        <h2 className="login-title">Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="login-email-group mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="login-password-group mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder=" Enter password" required />
          </Form.Group>
  
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
  
}

export default LoginPage;
