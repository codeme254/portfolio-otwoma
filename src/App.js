import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Jokes from './components/Jokes/Jokes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Jokes />
      <Footer />
    </div>
  );
}

export default App;
