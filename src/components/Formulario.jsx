import React from "react";
import styled from "@emotion/styled";
import useSelectorMonedas from "../hooks/useSelectorMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 12px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [state, SelectorMonedas] = useSelectorMonedas(
    "Elige tu moneda",
    monedas
  );

  return (
    <form>
      <SelectorMonedas />
      {state}
      <InputSubmit type="submit" value="convertir" />
    </form>
  );
};

export default Formulario;
