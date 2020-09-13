import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

import SuspenseBoundary from "./commons/boundary/suspense";

const SignUp = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Switch>
      <SuspenseBoundary>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
      </SuspenseBoundary>
    </Switch>
  );
}

export default App;
