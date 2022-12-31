import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavBar({currentPage , handlePageChange}) {
  return (
    <div className="fixed-top">
    <Navbar>
      <Container>
    <Nav className="highlighted-btn">
    <Nav className="nav-nav-tabs">
      <Nav className="nav-item">
        <Nav.Link
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About </Nav.Link>
      </Nav>
      <Nav className="nav-item">
        <Nav.Link
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio </Nav.Link>
        </Nav>
      <Nav className="nav-item">
        <Nav.Link
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume </Nav.Link>
        </Nav>
      <Nav className="nav-item">
        <Nav.Link
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact </Nav.Link>
        </Nav>
     </Nav>
    </Nav>
    </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
