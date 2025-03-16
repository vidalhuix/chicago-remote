import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const location = useLocation();

  return (
    <NavbarContainer>
      <LeftContainer>
        <img src="/logo.svg" alt="company_logo" />
        <span>UpGrid© Energy</span>
      </LeftContainer>
      <div />
      <RightContainer>
        <StyledLink to="/" $active={location.pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/products" $active={location.pathname === "/products"}>
          Products
        </StyledLink>
        <StyledLink to="/company" $active={location.pathname === "/company"}>
          Company
        </StyledLink>
        <StyledLink
          to="/partnership"
          $active={location.pathname === "/partnership"}
        >
          Partnership
        </StyledLink>
        <StyledLink to="/contact" $active={location.pathname === "/contact"}>
          Contact
        </StyledLink>
        <StyledLink to="/support" $active={location.pathname === "/support"}>
          Support
        </StyledLink>
      </RightContainer>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
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
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #00968c;
  flex: 40%;
  padding-left: 3%;
  img {
    z-index: 110;
    padding: 10px;
    height: 90%;
  }
  span {
    white-space: nowrap;
    bottom: 3px;
    margin: 0;
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
  color: ${(props) => (props.$active ? "#00968c" : "white")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  text-decoration: none;
  margin: 20px;
  &:hover {
    transform: scale(1.1);
    transition: transform 150ms ease-in;
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
