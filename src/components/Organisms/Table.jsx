import React from "react";

const style = {
  color: "#007BDF",
};

const Table = ({ temperaturas }) => (
  <>
    <table className="table-container center-content">
      <thead>
        <tr>
          <th>#</th>
          <th>Temperatura</th>
          <th>Estado</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody style={style}>
        {temperaturas.map((t, index) => (
          <tr key={t._id}>
            <td>{index + 1}</td>
            <td>{`${t.temperatura} °C`}</td>
            <td>{t.state}</td>
            <td>{t.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Table;
