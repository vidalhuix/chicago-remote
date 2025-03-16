import styled from "styled-components";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const contacts = [
  {
    id: 2,
    image: "/Portrait_Simon.jpeg",
    name: "Simon Jani",
    title: "Founder and CTO",
    phone: "+1 987 654 321",
    email: "simon@example.com",
  },
  {
    id: 1,
    image: "/Portrait_Suzanne.jpeg",
    name: "Suzanne Jani",
    title: "Founder and CEO",
    phone: "+1 234 567 890",
    email: "suzanne@example.com",
  },
  {
    id: 3,
    image: "/Portrait_Arnau.png",
    name: "Arnau Vidal",
    title: "Tech Lead",
    phone: "+1 555 666 777",
    email: "arnau@example.com",
  },
];

export default function ContactPage() {
  const [copiedId, setCopiedId] = useState(null); // Track which contact's email was copied

  const handleCopy = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id); // Set the ID of the copied contact
    setTimeout(() => setCopiedId(null), 2000); // Reset after 2 seconds
  };

  return (
    <Container>
      {contacts.map((contact) => (
        <ContactCard key={contact.id}>
          <Image src={contact.image} alt={contact.name} />
          <Info>
            <h2>{contact.name}</h2>
            <p>{contact.title}</p>
            <Phone>{contact.phone}</Phone>
            <Email onClick={() => handleCopy(contact.email, contact.id)}>
              E-MAIL
              <HiddenEmail>{contact.email}</HiddenEmail>
            </Email>
            {copiedId === contact.id && <StyledFaCopy />} {/* Show icon only for the copied contact */}
          </Info>
        </ContactCard>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  max-width: 900px;
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  padding: 15px;
  width: 300px;
  text-align: center;
  line-height: 1.5;
  color: #3b3b3b;
  h2,
  p {
    margin: 0;
  }
`;

const Image = styled.img`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid white;
  object-fit: cover;
  transform: scale (1.1);
`;

const Info = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
`;

const Phone = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #949494;
`;

const Email = styled.p`
  margin: 0;
  font-size: 14px;
  color: #949494;
  text-decoration: none;
  cursor: pointer;
  position: relative;
`;

const HiddenEmail = styled.span`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;


const StyledFaCopy = styled(FaCopy)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #cac6c6;
  margin-left: 5px;
`;
