import Accordion from 'react-bootstrap/Accordion';
import { AppWrapper } from './styles';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';

function App() {
  return (
    <div className='App'>
      <AppWrapper>
        <Contact />
        <Header />
        <Accordion>
          <Education />
          <Work />
          <Skills />
        </Accordion>
      </AppWrapper>
    </div>
  );
}

export default App;
