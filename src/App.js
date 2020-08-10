import React from "react";
import LandingPage from "./components/LandingPage";
import { Route, Switch } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from './components/LoginPage'

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} /> 
        <Route exact path="/login" component={LoginPage} />  
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}
