import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

export default () => {
  return (
    <>
      <div>
        <Navbar>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/music">Music</Nav.Link>
          <Nav.Link href="/videos">Videos</Nav.Link>
        </Navbar>
      </div>
    </>
  );
};
