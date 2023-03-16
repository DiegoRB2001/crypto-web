import React from "react";
import styled from "@emotion/styled";

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

  &:hover {
    background-color: #9497ff;
    cursor: pointer;
  }
`;

const Formulario = () => {
  return (
    <form>
      <InputSubmit type="submit" value="cotizar" />
    </form>
  );
};

export default Formulario;
