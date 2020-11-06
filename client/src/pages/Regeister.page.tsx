import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface RegisterState {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Regeister() {
  const [variables, setVariables] = useState<RegisterState>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function onRegister(e: any) {
    e.preventDefault();
    console.log("-----------", variables);
  }
  return (
    <div>
      <h1 className="text-center">Register</h1>
      <Form onSubmit={(e) => onRegister(e)}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={variables.email}
            onChange={(e) => {
              setVariables({ ...variables, email: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={variables.userName}
            onChange={(e) => {
              setVariables({ ...variables, userName: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={variables.password}
            onChange={(e) => {
              setVariables({ ...variables, password: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={variables.confirmPassword}
            onChange={(e) => {
              setVariables({ ...variables, confirmPassword: e.target.value });
            }}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="success" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}
