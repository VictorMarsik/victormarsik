import { AppWrapper } from './styles';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Work from '../Work/Work';

function App() {
  return (
    <div className='App'>
      <AppWrapper>
        <Contact />
        <Header />
        <Education />
        <Work />
      </AppWrapper>
    </div>
  );
}

export default App;
