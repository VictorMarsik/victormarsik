import Col from 'react-bootstrap/Col';
import {
  HeaderContainer,
  HeaderText,
  HeaderPic,
  PicWrapper,
  IntroductionText,
} from './styles';
import pic from '../../assets/profile.jpg';
import data from '../../data';

const Header = () => {
  const { name, introduction} = data;
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
