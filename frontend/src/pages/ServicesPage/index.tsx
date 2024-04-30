import React from 'react';
import Header from '../../components/Header';

import OwlCarousel from 'react-owl-carousel';

import cozinheiro from '../../assets/images/icons/cozinheiro.svg';
import carpinteiro from '../../assets/images/icons/carpinteiro.svg';
import eletricista from '../../assets/images/icons/eletricista.svg';
import detetizador from '../../assets/images/icons/detetizador.svg';
import encanador from '../../assets/images/icons/encanador.svg';
import faxineira from '../../assets/images/icons/faxineira.svg';

import './styles.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ServicesPage = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
    autoplayTimeout: 3000,
    autoplay: true,
  };

  return (
    <>
      <Header />

      <div id='portfolio' className='our-portfolio section'>
        <div className='container wow fadeInLeft'>
          <div className='row'>
            <div className='col-lg-5'>
              <div
                className='section-heading wow fadeInLeft'
                data-wow-duration='1s'
                data-wow-delay='0.3s'
              >
                <h6>Serviços</h6>
                <h4>
                  Alguns serviços que você encontra na <em>CraftHub</em>
                </h4>
                <div className='line-dec'></div>
              </div>
              <p className='wow fadeInLeft'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                ullam distinctio modi tempore necessitatibus porro temporibus
                velit odit iste sunt hic veritatis, libero mollitia atque, omnis
                pariatur numquam quam fugit!
              </p>
            </div>
          </div>
        </div>
        <div
          className='container-fluid wow fadeIn'
          data-wow-duration='1s'
          data-wow-delay='0.7s'
        >
          <div className='row'>
            <div className='col-lg-12'>
              <OwlCarousel className='owl-theme loop owl-carousel' {...options}>
                <div className='item'>
                  <a href='#'>
                    <div className='portfolio-item'>
                      <div className='thumb'>
                        <img src={cozinheiro} alt='' />
                      </div>
                      <div className='down-content'>
                        <h4>Cozinheiro</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='#'>
                    <div className='portfolio-item'>
                      <div className='thumb'>
                        <img src={carpinteiro} alt='' />
                      </div>
                      <div className='down-content'>
                        <h4>Carpinteiro</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='#'>
                    <div className='portfolio-item'>
                      <div className='thumb'>
                        <img src={eletricista} alt='' />
                      </div>
                      <div className='down-content'>
                        <h4>Eletricista</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='#'>
                    <div className='portfolio-item'>
                      <div className='thumb'>
                        <img src={detetizador} alt='' />
                      </div>
                      <div className='down-content'>
                        <h4>Detetizador</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='#'>
                    <div className='portfolio-item'>
                      <div className='thumb'>
                        <img src={encanador} alt='' />
                      </div>
                      <div className='down-content'>
                        <h4>Encanador</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='item'>
                  <a href='#'>
                    <div className='portfolio-item'>
                      <div className='thumb'>
                        <img src={faxineira} alt='' />
                      </div>
                      <div className='down-content'>
                        <h4>Faxineira</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
