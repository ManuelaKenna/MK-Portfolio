import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';


function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Testimonial') {
      return <Testimonial />;
    }

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='container' style= {{height: '100vh'}}>

    {/* We are passing the currentPage from state and the function to update it */}
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Here we are calling the renderPage method which will return a component  */}
    {renderPage()}
  </div>
  );
}

export default App;
