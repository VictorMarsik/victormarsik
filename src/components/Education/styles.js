import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const EducationContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
`;

const EducationHeader = styled.p`
  font-size: 2rem;
  font-family: 'Nunito';
  font-weight: bold;
  margin: 0;
`;

const EducationBody = styled.p`
  font-size: 1rem;
  font-family: 'Nunito';
`;

export { EducationContainer, EducationHeader, EducationBody };
