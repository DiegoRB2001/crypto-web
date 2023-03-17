import styled from "@emotion/styled";
import ImageCrypto from "./img/logo.png";
import Formulario from "./components/Formulario";

function App() {
  const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
  `;

  const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: auto;
    display: block;
  `;

  const Heading = styled.h1`
    font-family: "Ubuntu", sans-serif;
    color: #fff;
    font-weight: 700;
    font-size: 34px;
  `;

  return (
    <Contenedor>
      <Imagen src={ImageCrypto} alt="Es una imagen de crypto" />
      <Heading>
        CryptoMania <Formulario />
      </Heading>
    </Contenedor>
  );
}

export default App;
