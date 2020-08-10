import React from 'react'
import { Route, Redirect } from "react-router-dom";
import LoginPage from './LoginPage'

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props);
        if (true) {  //LoginPage.isAuthenticated()
          return <Component {...props} />;
        } 
        else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
