import React from 'react';
import Header from '../../components/Header';

import ServiceImg from '../../assets/images/service-img.jpg';

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

      <div id='services' className='our-services section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <div
                className='section-heading wow fadeInLeft'
                data-wow-duration='1s'
                data-wow-delay='0.3s'
              >
                <h6>Serviços</h6>
                <h4>
                  Alguns Serviços da <em>CraftHub</em>
                </h4>
                <div className='line-dec'></div>
              </div>
            </div>
          </div>
        </div>
        {/* CARDS */}
      </div>
    </>
  );
};

export default ServicesPage;
