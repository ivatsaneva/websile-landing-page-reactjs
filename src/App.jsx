import React from 'react';
import './app.scss'; // Importing the SCSS file
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Experience from './components/experience/Experience';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Experience/>
    </>
  );
}

export default App;
