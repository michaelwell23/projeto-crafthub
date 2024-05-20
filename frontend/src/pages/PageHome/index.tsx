import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import landing from '../../assets/images/ilustration.svg';
import searchIcon from '../../assets/images/icons/search.svg';
import registerIcon from '../../assets/images/icons/add_work.svg';
import heartIcon from '../../assets/images/icons/heart.svg';

import './styles.css';

const Landing = () => {
  return (
    <>
      <div id='landing-page'>
        <div id='landing-page-content' className='container'>
          <div className='logo-container'>
            <img src={logo} className='image-hero' alt='Logo CraftHub' />
            <h2>
              Os melhores profissionais você encontra na <span>CraftHub</span>
            </h2>
          </div>
          <img src={landing} alt='Plataforma de profissionais' />

          <div className='buttons-container'>
            <Link to='/search-provider' className='providers'>
              <img src={searchIcon} alt='pesquisar por profissionais' />
              Pesquisar por profissionais
            </Link>

            <Link to='/register-provider' className='register'>
              <img
                src={registerIcon}
                alt='Registar-se como prestador de serviços'
              />
              Cadastrar-se como prestador
            </Link>
          </div>
          <span className='total-connections'>
            Total de 23456 conexões já realizadas
            <img src={heartIcon} alt='Coração' />
          </span>
        </div>
      </div>
    </>
  );
};

export default Landing;
