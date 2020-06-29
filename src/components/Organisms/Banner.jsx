import React from "react";
import { Link } from "react-router-dom";

const Banner = ({
  color,
  image,
  title,
  subtitle,
  home,
  poster,
  courseBanner,
  especialidad,
  info,
}) => (
  <div className={`main-banner img-container l-block ${color}`}>
    <div className="ed-grid">
      <div>
        <img src={image.src} alt={image.alt} className="main-banner__img" />
        <div className="ed-grid m-grid-2">
            <div className="main-banner__data">
              <h1 className="main-banner__title">{title}</h1>
              <p>{subtitle}</p>
              <Link to="/temperaturas" className="button second-color">
                Mis Temperaturas
              </Link>
            </div>
            <div className="img-container s-ratio-16-9">
              <img src={poster} alt="Curso actual" />
            </div>
          </div>
      </div>
    </div>
  </div>
);
export default Banner;
