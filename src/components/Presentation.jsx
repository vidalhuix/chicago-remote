import styled from "styled-components";

export default function Presentation() {
  return (
    <Container>
      <Text>
        <h1>UpGrid© Energy</h1>
        <p>
          is a new company selling innovative, smart modular EV battery charging
          products, utilizing renewable energy as a source. The simplified
          charging through modularity uses Direct Current power as a main source
          instead of just relying on power from the grid. This leads to
          increased efficiency, lower electricity costs and constraints. The
          advanced charging technology (patent pending) is designed to maximize
          a car’s range and optimize battery health.
        </p>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: auto, 1.75rem, auto, 1.75rem;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 900px;
  padding: 20px;
  @media (min-width: 640px) {
    padding-left: 2.5rem;
  }
`;

const Text = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;

  line-height: 2rem;
  color: #3b3b3b;
  h1 {
    display: inline;
    color: #00968c;
    padding-right: 10px; 
  }
  p {
    display: inline;
  }
`;
