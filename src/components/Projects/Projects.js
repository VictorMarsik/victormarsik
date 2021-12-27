import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';

import { ProjectsContainer, ProjectsHeader, CarouselWrapper } from './styles';
import { projects } from '../../daja.json';
import membershpe from '../../assets/membershpe.png';
import register from '../../assets/register.png';
import login from '../../assets/login.png';

const Projects = () => {
  return (
    <ProjectsContainer>
      <Col md={8} xs={12}>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            <ProjectsHeader>{projects.header}</ProjectsHeader>
          </Accordion.Header>
          <Accordion.Body>
            <CarouselWrapper>
              <Col md={11} xs={12}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={membershpe}
                      alt='First slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={register}
                      alt='First slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={login}
                      alt='First slide'
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </CarouselWrapper>
          </Accordion.Body>
        </Accordion.Item>
      </Col>
    </ProjectsContainer>
  );
};

export default Projects;
