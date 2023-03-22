import React from "react";
import styled from "@emotion/styled";

const Datos = styled.div`
  background-color: #4361ee;
  color: #fff;
  padding: 15px;
  font-size: 12px;
  font-weight: 700;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  margin-top: 50px;
`;

const Imagen = styled.div`
  height: 100%;
  align-items: center;
  width: 25%;
`;

const Data = ({ data }) => {
  const { precioAhora, precioInicio, precioBajo } = data;
  return (
    <Datos>
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
