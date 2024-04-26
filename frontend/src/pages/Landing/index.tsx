import React from 'react';
import { Link } from 'react-router-dom';

import landing from '../../assets/images/landing.svg';
import addWork from '../../assets/images/icons/add_work.svg';
import searchIcon from '../../assets/images/icons/work.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import Header from '../../components/Header';

import './styles.css';

const Landing = () => {
  return (
    <>
      <Header />
      <div id='page-landing'>
        <div id='page-landing-content' className='container'>
          <div className='logo-container'>
            <h1>
              Conectando Você aos <span>Melhores Profissionais</span> para
              Transformar sua Casa.
            </h1>
            <h4>Reserve seu profissional em segundos.</h4>
          </div>
          <img
            src={landing}
            className='hero-image'
            alt='Marketplace para busca de profissionais'
          />

          <div className='buttons-container'>
            <Link to='' className='providers'>
              <img src={searchIcon} alt='contratar' />
              Encontrar prestador
            </Link>
            <Link to='' className='register'>
              <img src={addWork} alt='contratar' />
              cadastrar
            </Link>
          </div>
          <span className='total-providers'>
            Total de 200 prestadores já cadastrados{' '}
            <img src={purpleHeart} alt='coração roxo' />
          </span>
        </div>
      </div>
    </>
  );
};

export default Landing;
