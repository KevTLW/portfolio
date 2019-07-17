import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Landing from './components/Landing';
import './resources/styles/App.scss';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scroll = setInterval(() => {
      window.scrollTo(0, 0);
    }, 1);

    setTimeout(() => {
      clearInterval(scroll);
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <Intro />
      <Landing />
      <div className={loading ? 'd-none' : ''}>
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
