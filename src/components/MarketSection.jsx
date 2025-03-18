import styled from "styled-components";
import marketImage from "/market_opportunity.jpg";

export default function MarketOpportunity() {
  const statsData = [
    {
      title: "$163 billion",
      text: "Market research predicts that the EV charging market will be worth $163 billion in 2024 and $652 billion in 2029, growing by 300% by that time.",
    },
    {
      title: "$30 billion",
      text: "Residential solar panels were estimated at $30 billion in 2022 and are estimated to grow at a CAGR of 13.7% by 2030.",
    },
    {
      title: "15.4%",
      text: "According to a study by Infinity Business Insights, the global renewable energy management software market size is forecasted to expand at a CAGR of 15.4% through 2032.",
    },
  ];

  return (
    <Container>
      <Title>Market Opportunity</Title>
      <Content>
        <Image src={marketImage} alt="Market Opportunity" />
        {statsData.map((stat, index) => (
          <StatBlock key={index}>
            <h3>{stat.title}</h3>
            <p>{stat.text}</p>
          </StatBlock>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: #4d6561;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
`;

const Content = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  align-items: start;
`;

const Image = styled.img`
  object-fit: cover;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Title = styled.p`
  text-shadow: #000000 1px 0 10px;
  color: white;
  font-size: 30px;
  text-transform: uppercase;
  display: inline-block;
`;

const StatBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  h3 {
    color: white;
    font-size: 22px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    color: #d3af97;
    line-height: 1.5rem;
    margin: 0;
  }
`;
