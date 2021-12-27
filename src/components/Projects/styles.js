import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const ProjectsContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
`;

const ProjectsHeader = styled.p`
  font-size: 2rem;
  font-family: 'Nunito';
  font-weight: bold;
  margin: 0;
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export { ProjectsContainer, ProjectsHeader, CarouselWrapper };
