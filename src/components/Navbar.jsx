// components/Navbar.jsx
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard">Netflix Clone</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
          <Nav.Link as={Link} to="/">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
