import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  background-color:rgb(48, 44, 44);
`;

function App() {
  return <Container>Hello, Vite + React + Styled Components!</Container>;
}

export default App;
