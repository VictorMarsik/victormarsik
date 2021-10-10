import { AppWrapper } from './styles';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';

function App() {
  return (
    <div className='App'>
      <AppWrapper>
        <Contact />
        <Header />
        <Education />
      </AppWrapper>
    </div>
  );
}

export default App;
