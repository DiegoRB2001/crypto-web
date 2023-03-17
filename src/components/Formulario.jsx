import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectorMonedas from "../hooks/useSelectorMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

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
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectorMonedas] = useSelectorMonedas(
    "Elige tu moneda",
    monedas
  );
  const [crypto, SelectorCryptos] = useSelectorMonedas(
    "Elige tu crypto",
    cryptos
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arregloCryptos = resultado.Data.map((crypto) => ({
        id: crypto.CoinInfo.Name,
        nombre: crypto.CoinInfo.FullName,
      }));
      setCryptos(arregloCryptos);
    };
    consultarApi();
  }, []);

  const manejadorSubmit = (e) => {
    e.preventDefault();
    if ([moneda, crypto].includes("")) {
      console.error("ERROR");
      setError(true);
      return;
    }
    console.log("Se envio el formulario");
    console.log(moneda);
    console.log(crypto);
    setError(false);
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={manejadorSubmit}>
        <SelectorMonedas />
        <SelectorCryptos />
        <InputSubmit type="submit" value="convertir" />
      </form>
    </>
  );
};

export default Formulario;
