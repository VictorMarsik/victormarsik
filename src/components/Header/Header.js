import Col from 'react-bootstrap/Col';
import {
  HeaderContainer,
  HeaderText,
  HeaderPic,
  PicWrapper,
  IntroductionText,
} from './styles';
import pic from '../../assets/profile.jpg';
import { name, introduction } from '../../daja.json';

const Header = () => {
  return (
    <HeaderContainer>
      <Col sm={12} md={7}>
        <HeaderText>{name}</HeaderText>
        <IntroductionText startDelay={1000}>{introduction}</IntroductionText>
        <PicWrapper>
          <Col lg={7}>
            <HeaderPic src={pic} />
          </Col>
        </PicWrapper>
      </Col>
    </HeaderContainer>
  );
};

export default Header;
