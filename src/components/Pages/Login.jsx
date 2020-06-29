import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const authentication = (e) => {
  e.preventDefault();
  const form = e.target;

  const data = {
    email: form.email.value,
    password: form.password.value,
  };

  Axios.post(`${process.env.REACT_APP_URL_API}/signin`, data)
    .then((data) => {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("_id", data.data.data._id);
      localStorage.setItem("displayName", data.data.data.displayName);
      window.location = "/";
    })
    .catch((e) => {
      alert("Error al iniciar sesión");
    });
};

const Login = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Iniciar sesión</h1>
      <form onSubmit={authentication.bind()}>
        <div className="form__item">
          <label htmlFor="email">
            Correo electrónico
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su e-mail"
              required
            />
          </label>
        </div>

        <div className="form__item">
          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              required
            />
          </label>
        </div>
        <div className="form_item">
          <input type="submit" className="button full" value="Iniciar sesión" />
        </div>
      </form>
      <div className="center">
        <p>
          No tienes cuenta de usuario? <Link to="/registro">Crear Cuenta</Link>
        </p>
      </div>
    </div>
  </div>
);

export default Login;
