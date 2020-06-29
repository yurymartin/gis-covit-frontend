import React from "react";
import { Route, Redirect } from "react-router-dom";

const Public = ({ componente: Component, ...rest }) => {
  const userLogged = localStorage.getItem("token");
  // const userLogged = false;
  if (userLogged) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} render={Component} />;
};

export default Public;
