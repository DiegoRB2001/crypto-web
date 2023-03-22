import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectorMonedas from "../hooks/useSelectorMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";
import Data from "./Data";

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
  const [datos, setDatos] = useState({});
  const [consulta, setConsulta] = useState(false);
  const [moneda, SelectorMonedas] = useSelectorMonedas(
    "Elige tu moneda",
    monedas
  );
  const [cryptoMoneda, SelectorCryptos] = useSelectorMonedas(
    "Elige tu crypto",
    cryptos
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
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

  const manejadorSubmit = async (e) => {
    e.preventDefault();
    if (
      [moneda, cryptoMoneda].includes("") ||
      [moneda, cryptoMoneda].includes("Seleccione una divisa")
    ) {
      setError(true);
      setConsulta(false);
      return;
    }
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${moneda}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const objetoCrypto = resultado.Data.find(
      (crypto) => crypto.CoinInfo.Name === cryptoMoneda
    );
    const objetoData = objetoCrypto.DISPLAY[moneda];
    setDatos({
      precioAhora: objetoData.PRICE,
      precioBajo: objetoData.LOWDAY,
      precioInicio: objetoData.OPENDAY,
      imagen: objetoCrypto.CoinInfo.ImageUrl,
    });
    setError(false);
    setConsulta(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={manejadorSubmit}>
        <SelectorMonedas />
        <SelectorCryptos />
        <InputSubmit type="submit" value="convertir" />
      </form>
      {consulta && <Data data={datos} />}
    </div>
  );
};

export default Formulario;
