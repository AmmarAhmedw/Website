import React from 'react';
import styled from 'styled-components';

const CertificationsContainer = styled.section`
  padding: 2rem;
  background-color: #1e1e1e;
  color: white;
`;

const CertificationItem = styled.div`
  margin-bottom: 1rem;

  a {
    color: #42a5f5;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Certifications: React.FC = () => {
  return (
    <CertificationsContainer>
      <h2>Certifications</h2>
      <CertificationItem>
        <p>Apollo GraphQL Certification - <a href="https://www.apollographql.com/tutorials/certifications/78638872-4586-4451-9446-1afa85671c50" target="_blank" rel="noopener noreferrer">Link</a></p>
      </CertificationItem>
      <CertificationItem>
        <p>Apollo GraphQL Certification - <a href="https://www.apollographql.com/tutorials/certifications/4db5faa6-faad-4812-97ba-39edc9de6e3d" target="_blank" rel="noopener noreferrer">Link</a></p>
      </CertificationItem>
      <CertificationItem>
        <p>Coursera Certification - <a href="https://www.coursera.org/account/accomplishments/certificate/QTSKQQZXK2WL" target="_blank" rel="noopener noreferrer">Link</a></p>
      </CertificationItem>
      <CertificationItem>
        <p>Credly Certification - <a href="https://www.credly.com/badges/8b60502b-219e-4184-9102-dc3df4d2c2a2/linked_in_profile" target="_blank" rel="noopener noreferrer">Link</a></p>
      </CertificationItem>
    </CertificationsContainer>
  );
};

export default Certifications;
