import styled from "styled-components";

export default function Presentation() {
  return (
    <Container>
      <Text>
        <h1>UpGrid© Energy</h1>
        <p>
          is an innovative company revolutionizing electric vehicle (EV)
          charging with cutting-edge, smart modular battery solutions powered by
          renewable energy. Our modular charging systems utilize Direct Current
          (DC) power as the primary energy source, reducing reliance on the
          traditional power grid. This approach not only boosts efficiency but
          also lowers electricity costs and minimizes operational constraints.
        </p>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 900px;
  padding: 20px;
`;

const Text = styled.div`
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
  line-height: 2rem;
  h1 {
    display: inline;
    color: #00968c;
    padding-right: 10px;
  }
  p {
    display: inline;
    color: #3b3b3b;
    @media (max-width: 640px) {
      display: block;
      line-height: 1.5rem;
    }
  }
`;
