import React from 'react';
import Header from '../../components/Header';

import cozinheiro from '../../assets/images/icons/cozinheiro.svg';
import carpinteiro from '../../assets/images/icons/carpinteiro.svg';
import eletricista from '../../assets/images/icons/eletricista.svg';
import detetizador from '../../assets/images/icons/detetizador.svg';
import encanador from '../../assets/images/icons/encanador.svg';
import faxineira from '../../assets/images/icons/faxineira.svg';

import './styles.css';

const ServicesPage = () => {
  return (
    <>
      <Header />

      <div id='services' className='services section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div
                className='section-heading wow fadeInDown'
                data-wow-duration='1s'
                data-wow-delay='0.5s'
              >
                <h6>Serviços</h6>
                <h4>
                  <em>CraftHub</em> Conecta você com Especialistas em Serviços
                  Essenciais
                </h4>
                <div className='line-dec'></div>
                <p>
                  Do cozinheiro ao eletricista, do detetizado ao faxineira, o
                  CraftHub reúne uma diversidade de profissionais habilidosos
                  para atender às suas demandas diárias. Encontre confiança,
                  qualidade e conveniência em cada serviço, tudo em um único
                  lugar.
                </p>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='naccs'>
                <div className='grid'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='menu wow fadeInUp'>
                        <div className='first-thumb active'>
                          <div className='thumb'>
                            <span className='icon'>
                              <img src={cozinheiro} alt='' />
                            </span>
                            Cozinheito
                          </div>
                        </div>
                        <div>
                          <div className='thumb'>
                            <span className='icon'>
                              <img src={carpinteiro} alt='' />
                            </span>
                            Carpinteiro
                          </div>
                        </div>
                        <div>
                          <div className='thumb'>
                            <span className='icon'>
                              <img src={eletricista} alt='' />
                            </span>
                            Eletricista
                          </div>
                        </div>
                        <div>
                          <div className='thumb'>
                            <span className='icon'>
                              <img src={detetizador} alt='' />
                            </span>
                            Detetizador
                          </div>
                        </div>
                        <div className='last-thumb'>
                          <div className='thumb'>
                            <span className='icon'>
                              <img src={encanador} alt='' />
                            </span>
                            Encanador
                          </div>
                        </div>
                        <div className='last-thumb'>
                          <div className='thumb'>
                            <span className='icon'>
                              <img src={faxineira} alt='' />
                            </span>
                            Faxineira
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ServicesPage;
