import React from "react";
import { Container } from "react-bootstrap";
import ApolloProvider from "./ApolloProvider";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Regeister from "./pages/Regeister.page";

import { ROUTES } from "./util/routs";
import Login from "./pages/Login.page";
import Home from "./pages/Home.page";

function App() {
  return (
    <ApolloProvider>
      <Container className="pt-5">
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.REGISTER} component={Regeister} />
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Container>
    </ApolloProvider>
  );
}

export default App;
