import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container';

const SkillsContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
`;

const SkillsHeader = styled.p`
  font-size: 2rem;
  font-family: 'Nunito';
  font-weight: bold;
  margin: 0;
`;

const SkillBadge = styled(Badge)`
  margin-right: 0.75rem;
`;

export { SkillsHeader, SkillBadge, SkillsContainer };
