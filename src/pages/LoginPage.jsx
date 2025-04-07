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
        <h2 className="login-title">Demo Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="login-email-group mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="login-password-group mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder=" Enter password" required />
          </Form.Group>
  
          <Button
            type="submit"
            className="login-button text-white px-4 py-2"
            style={{
              backgroundColor: '#d9534f', // red shade like Netflix
              border: 'none',
              outline: 'none',
              boxShadow: 'none'
            }}
          >
            Login
          </Button>
          <p style={{ fontSize: "0.8rem", color: "gray", marginTop: "1rem" }}>
  This is a demo login page for a movie app clone project. No real credentials are collected.
</p>

        </Form>
      </Container>
    </div>
  );
  
}

export default LoginPage;
