import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../../commons/auth/context";

function PrivateRoute({ component: Component, ...rest }: any) {
  //@ts-ignore
  const { authTokens } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
