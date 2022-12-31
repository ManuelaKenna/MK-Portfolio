import React from 'react';
import NavBar from './NavBar';

function Header({ currentPage, handlePageChange }) {
  return(
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>

    </div>

  );
}

export default Header;