import styled from "styled-components";

export default function PresentationTwo() {
  return (
    <Container>
      <Text>
        <p>
          At the heart of our technology is an advanced charging system (patent
          pending) designed to extend your vehicle's range and optimize battery
          health. By integrating renewable energy and smart modular design,
          Energy is paving the way for a more sustainable and efficient future
          in EV charging.
        </p>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 900px;
  padding: 20px;
`;

const Text = styled.p`
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
  }
`;
