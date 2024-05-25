/// <reference path="../../../global.d.ts" />

import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import { Link, useLocation } from 'react-router-dom';
import 'animate.css';

import './styles.css';

import logo from '../../assets/images/logo/logo.png';
import ArrowBack from '../../assets/images/icons/backButton.svg';

const Header: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
    const wow = new WOW.WOW({
      animateClass: 'animated',
      offset: 50,
    });
    wow.init();
  }, [location]);

  const renderHeaderContent = () => {
    if (
      currentPage === '/search-provider' ||
      currentPage === '/register-provider'
    ) {
      return (
        <div className='container logo-container'>
          <Link to='/'>
            <img src={ArrowBack} alt='Logo CraftHub' />
          </Link>
          <img className='logo-img' src={logo} alt='Logo CraftHub' />
        </div>
      );
    } else {
      return (
        <>
          <header className='header'>
            <div className='navbar-area'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-12'>
                    <nav className='navbar navbar-expand-lg'>
                      <a className='navbar-brand' href='index.html'>
                        <img src={logo} alt='Logo' />
                      </a>
                      <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                      >
                        <span className='toggler-icon'></span>
                        <span className='toggler-icon'></span>
                        <span className='toggler-icon'></span>
                      </button>

                      <div
                        className='collapse navbar-collapse sub-menu-bar'
                        id='navbarSupportedContent'
                      >
                        <ul id='nav' className='navbar-nav ms-auto'>
                          <li className={`scroll-to-section`}>
                            <a
                              className='nav-item'
                              href='/'
                              style={
                                currentPage === '/'
                                  ? { color: '#4e6ef1' }
                                  : { color: '#6b6f92' }
                              }
                            >
                              Home
                            </a>
                          </li>
                          <li className={`scroll-to-section`}>
                            <a
                              href='#about'
                              className='nav-item'
                              style={
                                currentPage === '/about'
                                  ? { color: '#4e6ef1' }
                                  : { color: '#6b6f92' }
                              }
                            >
                              Sobre
                            </a>
                          </li>
                          <li className={`scroll-to-section`}>
                            <a
                              href='#service'
                              className='nav-item'
                              style={
                                currentPage === '/services'
                                  ? { color: '#4e6ef1' }
                                  : { color: '#6b6f92' }
                              }
                            >
                              Serviços
                            </a>
                          </li>
                          <li className={`scroll-to-section`}>
                            <a
                              href='#connections'
                              className='nav-item'
                              style={
                                currentPage === '/services'
                                  ? { color: '#4e6ef1' }
                                  : { color: '#6b6f92' }
                              }
                            >
                              Conexões
                            </a>
                          </li>
                          <li className={`scroll-to-section`}>
                            <a
                              href='#contact'
                              className='nav-item'
                              style={
                                currentPage === '/contact'
                                  ? { color: '#4e6ef1' }
                                  : { color: '#6b6f92' }
                              }
                            >
                              Contato
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      );
    }
  };

  return (
    <header
      className='header-area header-sticky wow slideInDown'
      data-wow-duration='0.75s'
      data-wow-delay='0s'
    >
      {renderHeaderContent()}
    </header>
  );
};
export default Header;
