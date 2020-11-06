import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import Regeister from "./pages/Regeister.page";

function App() {
  return (
    <Container className="pt-5">
      <Row className="bg-white py-5 justify-content-center">
        <Col sm={8} md={6} lg={4}>
          <Regeister />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
