import React from "react";
import Banner from "../Organisms/Banner";

const Home = () => {
  return (
    <>
      <Banner
        color="dark-color"
        image="https://i.ytimg.com/vi/bp3BEL-qI8U/maxresdefault.jpg"
        // title="Bienvenido a la experiencia más increible en educacion online. Comienza hoy mismo a aprender"
        title="Bienvenido al sistema de geolocalización silco para prevenir el contagio del covit-19"
        // subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad. Aquí lo encontrás"
        subtitle="sistema de geolocalización ''GIS-COVIT'' es una aplicativo que muestra la ubicación de otros usuarios con sus temperaturas respectivas en tiempo real"
        home
        poster="https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png"
      />
    </>
  );
};

export default Home;
