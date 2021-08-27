import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookieJs from "cookies-js";

function PrivateRoutes(props) {
  const cookie = cookieJs.get('google-auth-session')
  const { component: Component, ...rest } = props;
  const isAuth = !!cookie

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? <Component {...rest} {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoutes;
