import React from "react";
import Button from 'react-bootstrap/Button';
import { Nav, NavDropdown } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

function Navigation(){
    return  <Navbar 
    className="navibar" 
    bg="light" 
    variant="light"
    expand="lg"
    >
    <Container>
    <Navbar.Brand href="#home" className="navibar_brandname">164 Orders Found</Navbar.Brand>
   
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav className="me-auto">
      <Nav.Link className="navibar_link navibar_link_selected" href="#home">All</Nav.Link>
      <Nav.Link className="navibar_link" href="#features">Ongoing Orders</Nav.Link>
     
    </Nav>
      <Navbar.Text>
      Order By :
      </Navbar.Text>

      <NavDropdown
          id="nav-dropdown-dark-example"
          title="Order ID"
          menuVariant="light"
        >
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
     </NavDropdown>
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Navigation