import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const SignUp = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
    </Switch>
  );
}

export default App;
