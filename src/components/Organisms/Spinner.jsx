import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => (
  <>
    <div style={{ marginLeft: "50%", marginTop: "15%" }}>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      <h4>
        <b>Cargando ...</b>
      </h4>
    </div>
  </>
);

export default Spinner