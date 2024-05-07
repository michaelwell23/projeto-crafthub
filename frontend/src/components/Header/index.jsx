import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import { Link, useLocation } from 'react-router-dom';
import 'animate.css';

import './style.css';
import logo from '../../assets/images/logo.png';

import ArrowBack from '../../assets/images/icons/back.svg';

const Header = () => {
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0'>
        <a href='index.html' class='navbar-brand p-0'>
          <img src={logo} alt='Logo' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
        >
          <span class='fa fa-bars'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarCollapse'>
          <div class='navbar-nav ms-auto py-0'>
            <Link to='/' class='nav-item nav-link active'>
              Home
            </Link>
            <Link to='/about' class='nav-item nav-link'>
              About
            </Link>
            <Link to='/services' class='nav-item nav-link'>
              Service
            </Link>

            <Link to='/contact' class='nav-item nav-link'>
              Contact
            </Link>
          </div>
          <a
            href=''
            class='btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5'
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
