import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <button type="button" className="bg-red-700 ..." disabled>
        <svg className="animate-spin h-10 w-10 mr-3 ..." viewBox="0 0 24 24">
          -- ... --
        </svg>
        Processing
      </button>
    );
  }
  // console.log(user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
