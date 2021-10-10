import Col from 'react-bootstrap/Col';
import { HeaderContainer, HeaderText, HeaderPic, PicWrapper } from './styles';
import pic from '../../assets/profile.jpg';
import data from '../../daja.json';

const Header = () => {
  return (
    <HeaderContainer>
      <Col sm={12} md={6}>
        <HeaderText>{data.name}</HeaderText>
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
