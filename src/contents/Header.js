import React from 'react';
import './header.css';

function Header({ currentInfo, handlePageChange }) {
  return (
    <div>
      <header class='row' className='header row'>
        <h1 id='name' className='col p-2'>
          Melissa Vint
        </h1>
        <nav className='navbar col justify-content-end'>
          <a
            id='text'
            href='#About'
            onClick={() => handlePageChange('About')}
            className={currentInfo === 'About' ? 'nav-link active' : 'nav-link'}
          >
              
            About Me
          </a>
          <a
            id='text'
            href='#Portfolio'
            onClick={() => handlePageChange('Portfolio')}
            className={
              currentInfo === 'Portfolio' ? 'nav-link active' : 'nav-link'
            }
          >
            Portfolio
          </a>
          <a
            id='text'
            href='#Contact'
            onClick={() => handlePageChange('Contact')}
            className={
              currentInfo === 'Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </a>
          <a
            id='text'
            href='#Resume'
            onClick={() => handlePageChange('Resume')}
            className={
              currentInfo === 'Resume' ? 'nav-link active' : 'nav-link'
            }
          >
            Resume
          </a>
        </nav>
        
      </header>
    </div>
  );
}

export default Header;
