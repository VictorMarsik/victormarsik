import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const WorkContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
`;

const WorkHeader = styled.p`
  font-size: 2rem;
  font-family: 'Nunito';
  font-weight: bold;
  margin: 0;
`;

const WorkBodyContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

const WorkCompany = styled.a`
  font-size: 1.2rem;
  font-family: 'Nunito';
`;

const WorkTitle = styled.p`
  font-size: 1.1rem;
  font-family: 'Nunito';
  margin: 0;
`;

const DescriptionItem = styled.li`
  font-size: 1rem;
  font-family: 'Nunito';
`;

export { WorkContainer, WorkHeader, WorkCompany, WorkBodyContainer, WorkTitle, DescriptionItem };
