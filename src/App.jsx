import styled from "@emotion/styled";
import ImageCrypto from "./img/logo.png";
import Formulario from "./components/Formulario";

function App() {
  const Contenedor = styled.div`
    font-family: "Ubuntu", sans-serif;
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
  `;
  const Contenido = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    /* @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    } */
  `;

  const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: auto;
    display: block;
    @media (max-width: 992px) {
      margin-top: 50px;
      margin: 0;
    }
  `;

  const Heading = styled.h1`
    color: #fff;
    font-weight: 700;
    text-align: center;
    font-size: 34px;
  `;

  return (
    <Contenedor>
      <Imagen src={ImageCrypto} alt="Es una imagen de crypto" />
      <Contenido>
        <Heading>RacCoins</Heading>
        <Formulario />
      </Contenido>
    </Contenedor>
  );
}

export default App;
