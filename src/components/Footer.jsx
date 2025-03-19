import styled from "styled-components";

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2023 Upgrid© Energy. All rights reserved.</FooterText>
        <div>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </div>
      </FooterContent>
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
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;
