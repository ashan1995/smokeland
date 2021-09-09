import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Navigation';
import Item from './components/Item';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Navigation />
        <Item />
        <Item />
        <button className="btn-details">Details</button>
          </Container>
      
      </header>
    </div>
  );
}

export default App;
