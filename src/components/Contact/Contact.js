import { SocialIcon } from 'react-social-icons';
import { Wrapper } from './styles';
import { Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Wrapper>
      <Col sm={12}>
        <SocialIcon
          url='https://www.linkedin.com/in/eduardo-graziano-7795ab166/'
          target='_blank'
          bgColor='#157FFB'
          style={{ height: 60, width: 60, marginRight: '1rem' }}
        />
        <SocialIcon
          url='https://github.com/Eddy98'
          target='_blank'
          bgColor='#000000'
          style={{ height: 60, width: 60, marginRight: '1rem' }}
        />
        <SocialIcon
          url='mailto:eduardodgraziano@gmail.com'
          target='_blank'
          bgColor='#cf2525'
          style={{ height: 60, width: 60 }}
        />
      </Col>
    </Wrapper>
  );
};

export default Contact;
