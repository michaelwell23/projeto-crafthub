import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logo from '../../assets/images/logo.png';
import buttonMobile from '../../assets/images/icons/mobile.svg';

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} className='logo' alt='logo crafthub' />
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/about'>Sobre</Link>
          </li>
          <li>
            <Link to='/services'>Serviços</Link>
          </li>
          <li>
            <Link to='/faq'>Faq</Link>
          </li>
        </ul>
        <img src={buttonMobile} className='mobile-icon' alt='botão mobile' />
      </header>
    </>
  );
};

export default Header;
