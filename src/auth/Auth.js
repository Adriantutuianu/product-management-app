import React from "react";
import "./auth.css";
import Login from "./Login";
import Logout from "./Logout";

const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Logout />
    </div>
  );
};

export default Auth;
