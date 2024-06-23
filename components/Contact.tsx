import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Contact: React.FC = () => {
  const contact = {
    email: "ammarahmed@punch.agency",
    linkedIn: "https://www.linkedin.com/in/ammar-ahmed-200470279/",
    github: "https://github.com/AmmarAhmadww"
  };

  return (
    <ContactContainer>
      <h2>Contact</h2>
      <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
      <p>LinkedIn: <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">Ammar Ahmed</a></p>
      <p>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer">AmmarAhmadww</a></p>
    </ContactContainer>
  );
};

export default Contact;
