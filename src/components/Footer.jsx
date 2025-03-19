import styled from "styled-components";

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>2023 Upgrid© Energy. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #00968c;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: auto;
  font-size: 12px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
  `;


const FooterText = styled.p`
color: #fff;
  margin: 10px 0;
`;
