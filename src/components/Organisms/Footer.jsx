import React from "react";

const Footer = () => (
  <footer
    style={{
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      backgroundColor: "#282D31",
      color: "white",
      textAlign: "center",
    }}
  >
    <p style={{marginTop: "25px"}}>
      <img
        src="https://image.flaticon.com/icons/svg/3107/3107665.svg"
        alt=""
        style={{ width: "50px", height: "50px" }}
      />
      <p>GIS-COVIT</p>
      <small>&copy; Copyright 2020, version 1.0 | Developed by <a href="https://www.facebook.com/yurizito.martin">Yury Martin</a></small> 
    </p>
  </footer>
);

export default Footer;
