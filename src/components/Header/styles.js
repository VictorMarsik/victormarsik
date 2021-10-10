import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.p`
  font-size: 4rem;
  font-family: 'Nunito';
  margin: 0 0 2rem;
  text-align: center;
`;

const HeaderPic = styled.img`
  border-radius: 50%;
  width: 100%;
`;

const PicWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
`;

export { HeaderContainer, HeaderText, HeaderPic, PicWrapper };
