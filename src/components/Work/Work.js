import Col from 'react-bootstrap/Col';
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
        <WorkHeader>{work.header}</WorkHeader>
        {work.body.map((employer) => (
          <WorkBodyContainer>
            <WorkCompany href={employer.link} target="_blank">{employer.company}</WorkCompany>
            <WorkTitle>{employer.title}</WorkTitle>
            <ul>
              {employer.description.map((text) => (
                <DescriptionItem>{text}</DescriptionItem>
              ))}
            </ul>
          </WorkBodyContainer>
        ))}
      </Col>
    </WorkContainer>
  );
};

export default Work;
