import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';

import {
  ProjectsContainer,
  ProjectsHeader,
  CarouselWrapper,
  ProjectTitle,
  ProjectContainer,
  ProjectDescription,
} from './styles';
import data from '../../data';

const Project = ({ length, project, index }) => (
  <ProjectContainer>
    <Col md={10} xs={12}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <CarouselWrapper>
        <Carousel interval={3000}>
          {project.pictures.map((pic, index) => (
            <Carousel.Item>
              <img className='w-100' src={pic} alt={`${index} slide`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </CarouselWrapper>
      <ProjectDescription>{project.description}</ProjectDescription>
      {index < length - 1 ? <hr className='project-divider' /> : null}
    </Col>
  </ProjectContainer>
);

const Projects = () => {
  const { projects } = data;
  const { body } = projects;
  return (
    <ProjectsContainer>
      <Col md={8} xs={12}>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            <ProjectsHeader>{projects.header}</ProjectsHeader>
          </Accordion.Header>
          <Accordion.Body>
            {body.map((project, index) => (
              <Project length={body.length} project={project} index={index} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Col>
    </ProjectsContainer>
  );
};

export default Projects;
