import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
