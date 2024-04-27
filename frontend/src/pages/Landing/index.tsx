import React from 'react';
import { Link } from 'react-router-dom';

import landing from '../../assets/images/ilustration.svg';
import add from '../../assets/images/icons/add_work.svg';
import searchIcon from '../../assets/images/icons/work.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import Header from '../../components/Header';

import './styles.css';

const Landing = () => {
  return (
    <>
      <Header />
      <section className='page-landing'>
        <div className='container'>
          <div className='landing-text'>
            <span>
              Conectando você aos melhores profissionais, de forma rápida e
              simples"
            </span>
            <h1>Encontre os melhores profissionais para suas necessidades</h1>
            <p>
              Com apenas alguns cliques, você pode encontrar o profissional que
              deseja, tudo sem complicações.
            </p>

            <div className='container-buttons'>
              <button className='professional'>
                <img src={searchIcon} alt='' />
                Para clientes
              </button>
              <button className='create'>
                <img src={add} alt='' />
                Para profissionais
              </button>
            </div>
          </div>
          <div className='landing-ilustra'>
            <img src={landing} alt='ilustração de pessoas limpando' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
