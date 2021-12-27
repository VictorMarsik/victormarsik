import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Typist from 'react-typist';

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.p`
  font-size: 3.5rem;
  font-family: 'Nunito';
  margin: 0 0 1rem;
  text-align: center;
  color: white;
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

const IntroductionText = styled(Typist)`
  font-size: 2rem;
  font-family: 'Nunito';
  margin: 0 0 2rem;
  text-align: center;
  color: white;
`;

export { HeaderContainer, HeaderText, HeaderPic, PicWrapper, IntroductionText };
