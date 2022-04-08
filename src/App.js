import './App.css';
import { useState, useEffect} from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Jokes from './components/Jokes/Jokes';
import Footer from './components/Footer/Footer';

import RiseLoader from "react-spinners/RiseLoader";

function App() {
  const color = '#0d86f8';
  const [loading, setLoading ] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])
  return (
    <div className="App">
      {
        loading ? 
        <div className='loader'>
          <h1 className='loader__title'>Meet Otwoma Dennis</h1>
          <RiseLoader color={color} loading={loading}  size={50} />
          <p className='loader__paragraph'>A frontend web developer, backend web developer, python programmer, part time cyclist and proffesional dreamer.</p>
        </div>
         : 
        <>
          <Navigation />
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Jokes />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
