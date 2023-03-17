import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
