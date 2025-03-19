import { FaFileDownload } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import styled from "styled-components";

export const DownloadSection = () => {
  const fileName = "UpGrid Energy Pitch Deck ARC.pdf";
  const filePath = `/${fileName}`;

  return (
    <ContactContainer id="contact">
      <ContentWrapper>
        <Title>More Info</Title>
        <IconsContainer>

          <DownloadLink
            href={filePath}
            download={fileName}
            aria-label={`Download ${fileName}`}
            aria-describedby="file-name-tooltip"
          >
            <FaFileDownload size={42} fill="#00968c" />
            <FileNameTooltip>{fileName}</FileNameTooltip>
          </DownloadLink>
        </IconsContainer>
      </ContentWrapper>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  background-color: #eeeeee;
  margin: 0 auto;
  padding: 1.75rem 1rem;
`;

const ContentWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  padding-top: 1.5rem;
  max-width: 200px;
  width: 100%;
`;

const DownloadLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    transform: scale(1.05);
  }
`;

const FileNameTooltip = styled.span`
  position: absolute;
  display: none;
  width: 300px;
  color: #00968c;
  font-size: 0.7rem;
  overflow: hidden;
  padding-left: 200px;
  line-height: 1rem;

  ${DownloadLink}:hover & {
    display: block;
    animation: reveal 0.3s ease-in-out;
  }

  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
