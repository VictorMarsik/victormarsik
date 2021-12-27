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
  padding-bottom: 1rem;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectTitle = styled.p`
  font-size: 1.7rem;
  font-family: 'Nunito';
  margin: 0;
  padding-bottom: 0.5rem;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  font-family: 'Nunito';
  margin: 0;
  padding-bottom: 0.5rem;
`;

export {
  ProjectsContainer,
  ProjectsHeader,
  CarouselWrapper,
  ProjectTitle,
  ProjectContainer,
  ProjectDescription,
};
