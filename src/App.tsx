import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Achievements from './components/Achievements';
import Prototype from './components/Prototype';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Achievements />
      <Prototype />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;