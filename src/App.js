import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
