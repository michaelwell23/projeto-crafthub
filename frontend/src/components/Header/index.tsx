import React from 'react';

import './styles.css';

import logo from '../../assets/images/logo/logo.png';

const Header: React.FC = () => {
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
                      <li className='nav-item'>
                        <a className='page-scroll active' href='#home'>
                          Home
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='page-scroll' href='#about'>
                          About
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='page-scroll' href='#service'>
                          Services
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='' href='#connections'>
                          Conexões
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='' href='#contact'>
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
};

export default Header;
