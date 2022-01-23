import React from "react";
import "./auth.css";
import Login from "./Login";
import Logout from "./Logout";

const Auth = ({ credentials }) => {
  return (
    <div className="auth">
      {credentials?.token.length > 0 ? (
        <Logout setToken={credentials.setToken} />
      ) : (
        <Login setToken={credentials.setToken} />
      )}
    </div>
  );
};

export default Auth;
