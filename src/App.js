import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <About />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
