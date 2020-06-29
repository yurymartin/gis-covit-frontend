import React, { useState, useEffect } from "react";
import Axios from "axios";
import Table from "../Organisms/Table";
import Spinner from "../Organisms/Spinner";

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

const Temperatura = () => {
  const [temperatures, setTemperatures] = useState([]);
  const [estado, setEstado] = useState("");

  const calcEstado = (e) => {
    if (e.target.value <= 37) {
      setEstado("SALUDABLE");
    } else {
      setEstado("ENFERMO");
    }
    console.log(estado);
  };

  const getTemperatures = () => {
    Axios.get(
      `${process.env.REACT_APP_URL_API}/temperatureuser/${localStorage.getItem(
        "_id"
      )}`,
      config
    )
      .then((data) => setTemperatures(data.data.temperatures))
      .catch((err) => console.log(err));
  };

  const saveTemperature = async (e) => {
    const form = e.target;
    e.preventDefault();
    await Axios.post(
      `${process.env.REACT_APP_URL_API}/temperature`,
      {
        user_id: localStorage.getItem("_id"),
        temperatura: form.temperatura.value,
        state: estado,
      },
      config
    )
      .then(() => getTemperatures())
      .then(() => alert("temperatura creada"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTemperatures();
  }, []);
  return (
    <div className="main-banner img-container dark-color">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner__img"
            src="https://cdn.ticbeat.com/src/uploads/2016/09/ciudades-ricas.jpg"
            alt="ciudad"
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Listado de mis Temperaturas</p>
            <p>Es recomendable actualizar los registros de tus temperaturas</p>
            <form onSubmit={saveTemperature.bind()}>
              <div className="ed-container">
                <div className="ed-item s-2-3 form__item">
                  <input
                    type="number"
                    id="temperatura "
                    name="temperatura"
                    placeholder="Ingrese la temperatura"
                    required
                    autoComplete="off"
                    onChange={calcEstado}
                  />
                </div>
                <div className="ed-item s-1-3 form_item">
                  <input
                    type="submit"
                    className="button full first-color"
                    value="Ingresar Nueva temperatura"
                  />
                </div>
              </div>
            </form>
            {temperatures.length > 0 ? (
              <Table temperaturas={temperatures} />
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperatura;
