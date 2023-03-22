import React from "react";
import styled from "@emotion/styled";

const Datos = styled.div`
  background-color: #4361ee;
  color: #fff;
  padding: 15px;
  font-size: 10px;
  align-items: center;
  font-weight: 700;
  margin-top: 10px;
  width: auto;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  margin-top: 50px;
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 30%;
  margin: auto;
  margin-right: 10px;
  display: block;
  @media (max-width: 992px) {
    margin-top: 50px;
    margin: 0;
    margin-right: 20px;
  }
`;

const Data = ({ data }) => {
  const { precioAhora, precioInicio, precioBajo, imagen } = data;
  return (
    <Datos>
      <Imagen
        src={`https://cryptocompare.com${imagen}`}
        alt="Es una imagen de crypto"
      />
      <div style={{ width: "100%" }}>
        <h1>
          Ahora:{" "}
          <span style={{ float: "right", color: "#80ed99" }}>
            {precioAhora}
          </span>
        </h1>
        <h1>
          Inicio:{" "}
          <span style={{ float: "right", color: "#80ed99" }}>
            {precioInicio}
          </span>
        </h1>
        <h1>
          Precio bajo:{" "}
          <span style={{ float: "right", color: "#80ed99" }}>{precioBajo}</span>
        </h1>
      </div>
    </Datos>
  );
};

export default Data;
