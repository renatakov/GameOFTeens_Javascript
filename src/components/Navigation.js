import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{color: 'red'}}>Logo</Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>
                <Link style={{color: 'red'}} to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{color: 'red'}} to="/tests">Tests</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
