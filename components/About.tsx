import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.section`
  padding: 2rem;
  background-color: #1e1e1e;
  color: white;
`;

const ProfileOverview: React.FC = () => {
  return (
    <ProfileContainer>
      <h2>Profile Overview</h2>
      <p>As a technology enthusiast with a passion for innovation, I specialize in frontend development, particularly in React and TypeScript. With a strong foundation in cybersecurity and a keen interest in GraphQL and Apollo Client, I strive to create efficient and secure web applications. My skills in HTML, CSS, and JavaScript, coupled with experience in Node.js, Tailwind, and Material UI, allow me to deliver visually appealing and user-friendly interfaces. I hold certifications from Apollo GraphQL, Coursera, and Credly, showcasing my commitment to continuous learning and professional development.</p>
    </ProfileContainer>
  );
};

export default ProfileOverview;
