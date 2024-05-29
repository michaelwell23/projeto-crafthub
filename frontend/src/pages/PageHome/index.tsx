import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import landing from '../../assets/images/hero/ilustration.svg';
import graygrids from '../../assets/images/client-logo/graygrids.svg';
import lineicons from '../../assets/images/client-logo/lineicons.svg';
import pagebulb from '../../assets/images/client-logo/pagebulb.svg';
import uideck from '../../assets/images/client-logo/uideck.svg';

const Home: React.FC = () => {
  return (
    <>
      <section id='home' className='hero-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='hero-content'>
                <span className='wow fadeInLeft' data-wow-delay='.2s'>
                  Bem-vindo ao CraftHub
                </span>
                <h1 className='wow fadeInUp' data-wow-delay='.4s'>
                  Facilite a sua busca por um profissional de qualidade.
                </h1>
                <p className='wow fadeInUp' data-wow-delay='.6s'>
                  Aqui você encontra os melhores profissionais, de forma
                  prática, rápida e direta.
                </p>
                <Link
                  to='/search-provider'
                  className='main-btn btn-hero btn-hover wow fadeInUp'
                  data-wow-delay='.6s'
                >
                  Buscar Profissionais
                </Link>
                <Link
                  to='/register-provider'
                  className='main-btn2 btn-hero2 btn-hover wow fadeInUp'
                  data-wow-delay='.6s'
                >
                  Seja um Profissional
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hero-img wow fadeInUp' data-wow-delay='.5s'>
                <img src={landing} alt='ilustração da pagina home' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='client-logo-section pt-150'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <div className='single-logo text-center'>
                <img src={lineicons} alt='' />
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='single-logo text-center'>
                <img src={uideck} alt='' />
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='single-logo text-center'>
                <img src={pagebulb} alt='' />
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='single-logo text-center'>
                <img src={graygrids} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
