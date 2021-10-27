import React, { useState, useEffect } from 'react';

import logo from './../../assets/img/Logo.svg';
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
      <figure>
        <img src={logo} className="logo" alt="" />
      </figure>
      
      <div>
        <ul>
          <li>Sobre</li>
          <li>Experiência</li>        
          <li>Portifólio</li>        
          <li>Contato</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;