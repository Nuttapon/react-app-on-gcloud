import cat from './cat.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/Nuttapon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nutty from app one (Deployed on Github Action with verification)
        </a>
      </header>
    </div>
  );
}

export default App;
