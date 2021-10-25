import { AppWrapper } from './styles';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Work from '../Work/Work';
import Skills from '../Skills/Skills'

function App() {
  return (
    <div className='App'>
      <AppWrapper>
        <Contact />
        <Header />
        <Education />
        <Work />
        <Skills />
      </AppWrapper>
    </div>
  );
}

export default App;
