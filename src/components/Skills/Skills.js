import { SkillsHeader, SkillBadge, SkillsContainer } from './styles';
import { skills } from '../../daja.json';
import Col from 'react-bootstrap/Col';

const Skills = () => {
  return (
    <SkillsContainer>
      <Col md={8} xs={12}>
        <SkillsHeader>{skills.header}</SkillsHeader>
        {skills.list.map((skill) => (
        <SkillBadge pill variant="primary">
          {skill}
        </SkillBadge>
      ))}
      </Col>
    </SkillsContainer>
  );
};

export default Skills;
