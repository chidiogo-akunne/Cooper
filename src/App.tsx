import React, { lazy, useState } from "react";
import { Switch, Route } from "react-router-dom";

import SuspenseBoundary from "./commons/boundary/suspense";
import { AuthContext } from "./commons/auth/context";
import PrivateRoute from "./components/privateRoutes";

const SignUp = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));
const Home = lazy(() => import("./pages/home"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Contribution = lazy(() => import("./pages/contribution"));

function App() {
  //@ts-ignore
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data: any) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Switch>
        <SuspenseBoundary>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/contribution" component={Contribution} />
        </SuspenseBoundary>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
