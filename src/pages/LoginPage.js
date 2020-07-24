import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("TODO login with:", email, password);
    dispatch(login(email, password));
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>
            Email:{" "}
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>
            Password:{" "}
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Label>
        </Form.Group>
        <p>
          <Button type="submit">Login</Button>
        </p>
      </Form>
    </div>
  );
}
