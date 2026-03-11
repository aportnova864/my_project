import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
