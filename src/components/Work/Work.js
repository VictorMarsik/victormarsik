import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import {
  WorkContainer,
  WorkHeader,
  WorkCompany,
  WorkBodyContainer,
  WorkTitle,
  DescriptionItem,
} from './styles';
import { work } from '../../daja.json';

const Work = () => {
  return (
    <WorkContainer>
      <Col md={8} xs={12}>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            <WorkHeader>{work.header}</WorkHeader>
          </Accordion.Header>
          <Accordion.Body>
            {work.body.map((employer) => (
              <WorkBodyContainer>
                <WorkCompany href={employer.link} target='_blank'>
                  {employer.company}
                </WorkCompany>
                <WorkTitle>{employer.title}</WorkTitle>
                <ul>
                  {employer.description.map((text) => (
                    <DescriptionItem>{text}</DescriptionItem>
                  ))}
                </ul>
              </WorkBodyContainer>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Col>
    </WorkContainer>
  );
};

export default Work;
