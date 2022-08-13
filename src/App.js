import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;

      case 'Project':
        return <Project />;

      case 'Contact':
        return <ContactForm />;

      default:
        return <About />;
    }
  };

  const handlePageChange = page => setCurrentPage(page);

  return (
    <div className="App">
      <header>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <main>
        <div className="bg-img"></div>
        {renderPage()}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
