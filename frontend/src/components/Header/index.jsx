import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logo from '../../assets/images/logo.png';
import mobileIcon from '../../assets/images/icons/mobile.svg';

const Header = () => {
  return (
    <>
      <header
        className='header-area header-sticky wow slideInDown'
        data-wow-duration='0.75s'
        data-wow-delay='0s'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <nav className='main-nav'>
                <a href='index.html' className='logo'>
                  <img className='logo-img' src={logo} alt='Logo CraftHub' />
                </a>
                <ul className='nav'>
                  <li className='scroll-to-section'>
                    <a href='/' className='active'>
                      Home
                    </a>
                  </li>
                  <li className='scroll-to-section'>
                    <a href='/about'>Sobre</a>
                  </li>
                  <li className='scroll-to-section'>
                    <a href='/services'>Serviços</a>
                  </li>
                  <li className='scroll-to-section'>
                    <a href='/contact'>Contato</a>
                  </li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
