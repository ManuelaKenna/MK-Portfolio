import React from 'react';
import NavTabs from './NavTabs';

function Header({ currentPage, handlePageChange }) {
  return(
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>

    </div>

  );
}

export default Header;