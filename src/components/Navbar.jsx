import { useState } from "react"; // Add useState for state management
import { Link, useLocation } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Use RiCloseLine for the X icon
import styled from "styled-components";

export default function Navbar() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
        <StyledLink to="/contact" $active={location.pathname === "/contact"}>
          Contact
        </StyledLink>
        <StyledBtnMenu onClick={toggleModal}>
          {isModalOpen ? <RiCloseLine /> : <RiMenuLine />}
        </StyledBtnMenu>
      </RightContainer>

      {/* Modal for mobile routes */}
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <StyledLink to="/" $active={location.pathname === "/"} onClick={toggleModal}>
              Home
            </StyledLink>
            <StyledLink
              to="/products"
              $active={location.pathname === "/products"}
              onClick={toggleModal}
            >
              Products
            </StyledLink>
            <StyledLink
              to="/contact"
              $active={location.pathname === "/contact"}
              onClick={toggleModal}
            >
              Contact
            </StyledLink>
          </ModalContent>
        </Modal>
      )}
    </NavbarContainer>
  );
}

// Styled Components
const NavbarContainer = styled.nav`
  top: 0;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div {
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
    @media (max-width: 600px) {
      transform: scale(0.7);
    }
  }
  span {
    color: #00968c;
    white-space: nowrap;
    bottom: 3px;
    margin: 0;
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const RightContainer = styled.div`
  flex: 10%;
  display: flex;
  justify-content: space-between;
  padding-right: 5%;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  position: relative;
  color: ${(props) => (props.$active ? "#00968c" : "white")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  text-decoration: none;
  margin: 20px;
  @media (max-width: 600px) {
    display: none;
  }
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

const StyledBtnMenu = styled.button`
  position: absolute;
  right: 50px;
  font-size: 30px;
  border: none;
  background: none;
  filter: invert(1);
  cursor: pointer;
  display: none;
  &:hover {
    color: lightgray;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 80px; // Height of the navbar
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${StyledLink} {
    display: block;
    font-size: 24px;
    margin: 10px 0;
  }
`;