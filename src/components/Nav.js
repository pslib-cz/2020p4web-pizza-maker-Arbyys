import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Pizza maker</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/order/pizza">Pizza</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/order/calzone">Calzone</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/ingredients">Ingredients</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Example;
