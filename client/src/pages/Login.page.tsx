import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { gql, useLazyQuery } from "@apollo/client";
import { useHistory, Link } from "react-router-dom";
import { ROUTES } from "../util/routs";

interface LoginState {
  userName: string;
  password: string;
}

const LOGIN_USER = gql`
  query login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      userName
      email
      createdAt
      token
    }
  }
`;

export default function Login() {
  const [variables, setVariables] = useState<LoginState>({
    userName: "",
    password: "",
  });

  const history = useHistory();

  const [errors, setErrors] = useState<any>({});

  const [loginUser, { loading }] = useLazyQuery(LOGIN_USER, {
    onError: (err: any) => setErrors(err.graphQLErrors[0].extensions.errors),
    onCompleted(data) {
      localStorage.setItem("hello-token", data.login.token);
      history.push(ROUTES.HOME);
    },
  });
  function onLogin(e: any) {
    e.preventDefault();
    loginUser({ variables });
  }

  return (
    <Row className="bg-white py-5 justify-content-center">
      <Col sm={8} md={6} lg={4}>
        <h1 className="text-center">Login</h1>
        <Form onSubmit={(e) => onLogin(e)}>
          <Form.Group>
            <Form.Label className={errors.userName && "text-denger"}>
              {errors?.userName ?? "Username"}
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
              {errors?.password ?? "Password"}
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
          <div className="text-center">
            <Button variant="success" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </Button>
            <br></br>
            <small>
              Don't have an account? <Link to={ROUTES.REGISTER}>Register</Link>
            </small>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
