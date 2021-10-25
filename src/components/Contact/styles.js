import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  justify-content: center;
`;

const WeatherWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const WeatherText = styled.p`
  font-size: 1rem;
  font-family: 'Nunito';
  margin: 0 0 1rem;
  text-align: right;
`;

export { Wrapper, WeatherWrapper, WeatherText };
