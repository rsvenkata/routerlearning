import React from "react";
import Login from "./LoginAuthentication";
import LoginPage from "./LoginPage";

export default function AppLayout(props) {
  // console.log(props);

  return (   
    <div>
      <h1> App layout </h1>
      <button

        onClick={() => { 
          {/* (LoginPage.state.authenticated == false) */}
          props.history.push('/')  
        }}
      >
       Logout
      </button>
    </div>
  );
}