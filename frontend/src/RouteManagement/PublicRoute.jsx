import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookieJs from "cookies-js";

function PublicRoute(props) {
  const cookie = cookieJs.get('google-auth-session')
  const { component: Component, ...rest } = props;
  const isAuth = !!cookie

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...rest} {...routeProps} />
        )
      }
    />
  );
}

export default PublicRoute;
