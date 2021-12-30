import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import data from '../../data';
import { EducationContainer, EducationHeader, EducationBody } from './styles';

const Education = () => {
  const { education } = data;
  return (
    <EducationContainer>
      <Col md={8} xs={12}>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            <EducationHeader>{education.header}</EducationHeader>
          </Accordion.Header>
          <Accordion.Body>
            {education.body.map((text) => (
              <EducationBody>
                {text.college}
                <br />
                {text.degree}
                <br />
                {text.year}
              </EducationBody>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Col>
    </EducationContainer>
  );
};

export default Education;
