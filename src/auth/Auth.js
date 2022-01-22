import React from "react";
import "./auth.css";
import Login from "./Login";
import Logout from "./Logout";

const Auth = ({ credentials }) => {
  return (
    <div className="auth">
      <Login setToken={credentials.setToken} />
      <Logout />
    </div>
  );
};

export default Auth;
