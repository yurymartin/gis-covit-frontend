import React from "react";
import { NavLink } from "react-router-dom";

const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("displayName");
  localStorage.removeItem("_id");
  window.location = "/login";
};

const PrivateMenu = () => {
  return (
    <ul>
      <li><NavLink to="/" exact>Inicio</NavLink></li>
      <li><NavLink to="/temperaturas">Mis Temperaturas</NavLink></li>
      <li><NavLink to="/mapa">Mapa</NavLink></li>
      <li><span onClick={() => removeToken()}>Cerrar Sesión</span></li>
    </ul>
  );
};

export default PrivateMenu;
