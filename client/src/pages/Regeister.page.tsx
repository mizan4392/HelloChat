import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { gql, useMutation } from "@apollo/client";
import { useHistory, Link } from "react-router-dom";
import { ROUTES } from "../util/routs";

interface RegisterState {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const REGISTER_USER = gql`
  mutation register(
    $userName: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      userName: $userName
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      userName
      email
      createdAt
    }
  }
`;

export default function Regeister() {
  const [variables, setVariables] = useState<RegisterState>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const history = useHistory();

  const [errors, setErrors] = useState<any>({});

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update: (_, __) => history.push(ROUTES.LOGIN),
    onError: (err: any) => setErrors(err.graphQLErrors[0].extensions.error),
  });
  function onRegister(e: any) {
    e.preventDefault();
    registerUser({ variables });
  }
  return (
    <Row className="bg-white py-5 justify-content-center">
      <Col sm={8} md={6} lg={4}>
        <h1 className="text-center">Register</h1>
        <Form onSubmit={(e) => onRegister(e)}>
          <Form.Group>
            <Form.Label className={errors.email && "text-denger"}>
              {errors.email ?? "Email address"}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={variables.email}
              className={errors.email && "is-invalid"}
              onChange={(e) => {
                setVariables({ ...variables, email: e.target.value });
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label className={errors.userName && "text-denger"}>
              {errors.userName ?? "Username"}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={variables.userName}
              className={errors.userName && "is-invalid"}
              onChange={(e) => {
                setVariables({ ...variables, userName: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={errors.password && "text-denger"}>
              {" "}
              {errors.password ?? "Password"}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={variables.password}
              className={errors.password && "is-invalid"}
              onChange={(e) => {
                setVariables({ ...variables, password: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={errors.confirmPassword && "text-denger"}>
              {errors.confirmPassword ?? "Confirm Password"}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={variables.confirmPassword}
              className={errors.confirmPassword && "is-invalid"}
              onChange={(e) => {
                setVariables({ ...variables, confirmPassword: e.target.value });
              }}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Register"}
            </Button>
            <br></br>
            <small>
              Already have an account?
              <Link to={ROUTES.LOGIN}>Login</Link>
            </small>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
