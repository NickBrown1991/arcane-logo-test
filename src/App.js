import logo from './Assets/arcane-alchemist-logo.png';
import './App.css';
import Tilt from 'react-vanilla-tilt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
            <Tilt options={{ scale: 2 }}
            style={{
            width: 600,
            backgroundColor: "#282c34",
            }}>
              <img src={logo} className="App-logo" alt="logo" />
            </Tilt>
          </div>
      </header>
    </div>
  );
}

export default App;