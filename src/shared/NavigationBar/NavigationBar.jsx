import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {

  const {user} = useContext(AuthContext)

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Brand>Testy Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            {
            user &&
             <Link to="/login">
                    <Button variant="secondary">Login</Button>
            </Link>
            }
          </Nav>
          <Nav>
                
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;