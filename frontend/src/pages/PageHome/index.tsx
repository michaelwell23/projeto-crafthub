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
                        <h6>Agencia de Servios domésticos</h6>
                        <h2>Aqui você encontra o melho profissional</h2>
                        <p>
                          Seja encanador, eletricista, faxineiro ou outros
                          serviços, a CraftHub possibilita vocẽ a encontrar o
                          profissional qualificado para o serviço de sua
                          necessidade. Tudo muito fácil, tudo muito prático, com
                          apenas alguns cliques, você se conecta com o
                          profissional que deseja.
                        </p>
                      </div>
                      <div className='col-lg-12'>
                        <div className='border-first-button scroll-to-section'>
                          <Link
                            className='button_search_provider'
                            to='/search-provider'
                          >
                            Busca um profissiona?
                          </Link>
                          <Link
                            className='link_register_provider'
                            to='/register-provider'
                          >
                            Você é um profissiona?
                          </Link>
                        </div>
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
