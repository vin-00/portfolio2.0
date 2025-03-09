import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Featured from './components/featured/Featured';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('selected-theme', isDark ? 'light' : 'dark');
  };

  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className='main'>
        <Home isDark={isDark} />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Featured />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
