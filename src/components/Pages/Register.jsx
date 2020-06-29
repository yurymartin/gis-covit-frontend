import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const registration = (e) => {
  e.preventDefault();
  const form = e.target;

  const data = {
    email: form.email.value,
    displayName: form.fullname.value,
    password: form.password.value,
  };

  Axios.post(`${process.env.REACT_APP_URL_API}/signup`, data)
    .then((data) => {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("displayName", data.data.data.displayName);
      localStorage.setItem("_id", data.data.data._id);
      window.location = "/";
    })
    .then(() => alert("Usuario creado"))
    .catch((err) => alert("Error al crear usuario"));
};

const Register = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Crear cuenta</h1>
      <form onSubmit={registration.bind()}>
        <div className="form__item">
          <label htmlFor="fullname">
            Nombre Completo
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Ingrese su nombre"
              required
            />
          </label>
        </div>

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
          ¿Ya tienes cuenta de usuario? <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  </div>
);

export default Register;
