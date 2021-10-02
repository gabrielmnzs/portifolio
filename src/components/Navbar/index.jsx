import React, { useState, useEffect } from 'react';

import './styles.scss';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {    
    if (window.scrollY > 100) {
      setShow(false);      
    } else {
      setShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <nav className={`navbar ${show ? 'is-hidden' : 'is-visible'}`}>
      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Experiência</li>        
        <li>Portifólio</li>        
        <li>Contato</li>
      </ul>
    </nav>
  )
}

export default Navbar;