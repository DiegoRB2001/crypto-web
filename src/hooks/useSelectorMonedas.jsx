import { useState } from "react";
import styled from "@emotion/styled";

const useSelectorMonedas = (label, divisas) => {
  const Label = styled.label`
    color: white;
    font-family: "Ubuntu", sans-serif;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
  `;

  const Select = styled.select`
    background-color: #9497ff;
    width: 100%;
    padding: 10px;
    justify-content: center;
    color: white;
    font-weight: 900;
    font-size: 20px;
    border-radius: 12px;
    margin: 15px 0;
  `;

  const [state, setState] = useState("");

  const SelectorMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option>Seleccione una divisa</option>
        {divisas.map((divisa) => (
          <option key={divisa.id} value={divisa.id}>
            {divisa.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectorMonedas];
};

export default useSelectorMonedas;
