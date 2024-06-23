import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 2rem;
  background-color: #1e1e1e;
  color: white;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.li`
  background: #333;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #444;
  }
`;

const Skills: React.FC = () => {
  const skills = [
    'Cybersecurity',
    'GraphQL',
    'Apollo GraphQL',
    'Front End Development',
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Tailwind',
    'Material UI',
    'C',
    'C++',
    'C#',
    'Python',
  ];

  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;
