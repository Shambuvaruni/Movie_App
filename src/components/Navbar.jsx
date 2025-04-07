// components/Navbar.jsx
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/dashboard"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2rem",
              color: "red",
              letterSpacing: "1px",
            }}
          >
            Netflix Clone
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/dashboard"
              className="netflix-btn"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              className="netflix-btn"
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Netflix-style button CSS */}
      <style>{`
        .netflix-btn {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          text-transform: uppercase;
          color: white !important;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
        }
        .netflix-btn:hover {
          color: red !important;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

export default AppNavbar;
