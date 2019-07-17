import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Landing from './components/Landing';
import './resources/styles/App.scss';
import About from './components/About';

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
      </div>
    </>
  );
}

export default App;
