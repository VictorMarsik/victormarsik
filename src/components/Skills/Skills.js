import { SkillsHeader, SkillBadge, SkillsContainer } from './styles';
import data from '../../data';
import Col from 'react-bootstrap/Col';

const Skills = () => {
  const { skills } = data;
  return (
    <SkillsContainer>
      <Col md={8} xs={12}>
        <SkillsHeader>{skills.header}</SkillsHeader>
        {skills.list.map((skill) => (
          <SkillBadge pill className="myPill" bg={null}>
            {skill}
          </SkillBadge>
        ))}
      </Col>
    </SkillsContainer>
  );
};

export default Skills;
