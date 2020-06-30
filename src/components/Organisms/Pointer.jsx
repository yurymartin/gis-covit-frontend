import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

const socket = io("http://localhost:3001/", {
  forceNew: true,
});

const Pointer = () => {
  const icon = new Icon({
    iconUrl: "/alfiler.svg",
    iconSize: [40, 40],
  });

  const [response, setResponse] = useState({});

  useEffect(() => {
    socket.on("newUserCoordinates", (data) => {
      setResponse(data);
      console.log(data.id);
    });
  }, []);

  return isNaN(response.lat) && isNaN(response.lng) ? (
    <></>
  ) : (
    <Marker position={[response.lat, response.lng]} icon={icon}>
      <Popup>
        {`Temperatura: ${response.temperatura} °C`} <br />
        {`Persona: ${response.displayName}`} <br />
        {`Estado: ${response.estado}`} <br />
      </Popup>
    </Marker>
  );
};

export default Pointer;
