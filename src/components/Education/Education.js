import Col from 'react-bootstrap/Col';
import { education } from '../../daja.json';
import { EducationContainer, EducationHeader, EducationBody } from './styles';

const Education = () => {
  return (
    <EducationContainer>
      <Col md={8} xs={12}>
        <EducationHeader>{education.header}</EducationHeader>
        {education.body.map((text) => (
          <EducationBody>
            {text.college}
            <br />
            {text.degree}
            <br />
            {text.year}
          </EducationBody>
        ))}
      </Col>
    </EducationContainer>
  );
};

export default Education;
