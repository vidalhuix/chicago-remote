import styled from "styled-components";

export default function HeroSection() {
  return (
    <HeroContainer>
      <BackgroundVideo autoPlay loop muted>
        <source src="/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <HeroContent>
        <h1>WELCOME TO UPGRID</h1>
        <p>WHERE INNOVATION AND EFFICIENCY MEETS</p>
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 10px;
  h1,
  p {
    color: white;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-shadow: #000000 1px 0 10px;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 900px;
  padding: 20px;
  top: 200px;
`;
