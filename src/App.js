import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
    </div>
  );
}

export default App;
