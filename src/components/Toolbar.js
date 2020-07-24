import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { selectLoggedinUser } from "../store/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/actions";

export default function Toolbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedinUser);
  //console.log("user", isLoggedIn);

  return isLoggedIn === null ? (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Nav.Link href="/">Codaisseur Coders</Nav.Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar>
  ) : (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Nav.Link href="/">Codaisseur Coders</Nav.Link>
      </Navbar.Brand>
      <Navbar.Text>
        <p>
          Logged in as:
          {isLoggedIn.name}
          <Button onClick={() => dispatch(logout)}>Logout</Button>
        </p>
      </Navbar.Text>
    </Navbar>
  );
}
