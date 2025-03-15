import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarContainer>
      <LeftContainer>
        <img src="/logo.svg" alt="company_logo" />
      </LeftContainer>
      <div />
      <RightContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/company">Company</StyledLink>
        <StyledLink to="/partnership">Partnership</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/suport">Support</StyledLink>
      </RightContainer>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: row;
  div {
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
  }
`;

const LeftContainer = styled.div`
  flex: 30%;
  padding-left: 5%;
  img {
    z-index: 110;
    padding: 10px;
    height: 90%;
  }
`;

const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: space-between;
  padding-right: 5%;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  position: relative;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 20px;
  &:hover {
    transform: scale(1.1);
  }
  &::after {
    content: "";
    position: absolute;
    color: #00968c;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 250ms ease-in;
  }
  &:hover::after {
    color: #00968c;
    transform: scaleX(1);
    transform-origin: left;
  }
`;
