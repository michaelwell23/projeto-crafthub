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

      <div
        className='main-banner wow fadeIn'
        id='top'
        data-wow-duration='1s'
        data-wow-delay='0.5s'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-6 align-self-center'>
                  <div
                    className='left-content show-up header-text wow fadeInLeft'
                    data-wow-duration='1s'
                    data-wow-delay='1s'
                  >
                    <div className='row'>
                      <div className='col-lg-12'>
                        <h6>Encontre, Contrate, Conecte.</h6>
                        <h2>Conectando Prestadores e Clientes</h2>
                        <p>
                          CraftHub facilita a busca e contratação de prestadores
                          de serviço, conectando você aos profissionais certos
                          para cada necessidade. Simplifique sua busca, encontre
                          soluções confiáveis!
                        </p>
                      </div>
                      <div className='col-lg-12'></div>
                      <div className='border-first-button scroll-to-section'>
                        <Link
                          to='/search-provider'
                          className='providers-search'
                        >
                          <img src={searchIcon} alt='' />
                          Procurar Prestador
                        </Link>
                        <Link
                          to='/register-provider'
                          className='providers-create'
                        >
                          <img src={add} alt='' />
                          Cadastrar Prestrador
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div
                    className='right-image wow fadeInRight'
                    data-wow-duration='1s'
                    data-wow-delay='0.5s'
                  >
                    <img src={landing} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
