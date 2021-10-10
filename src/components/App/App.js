import { AppWrapper } from './styles';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className='App'>
      <AppWrapper>
        <Contact />
        <Header />
      </AppWrapper>
    </div>
  );
}

export default App;
