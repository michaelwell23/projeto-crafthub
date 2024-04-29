import React from 'react';
import Header from '../../components/Header';

import './styles.css';

import AboutImage from '../../assets/images/about-dec-v2.svg';

const About = () => {
  return (
    <>
      <Header />

      <div id='about' className='about section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div
                    className='about-left-image  wow fadeInLeft'
                    data-wow-duration='1s'
                    data-wow-delay='0.5s'
                  >
                    <img src={AboutImage} alt='' />
                  </div>
                </div>
                <div
                  className='col-lg-6 align-self-center  wow fadeInRight'
                  data-wow-duration='1s'
                  data-wow-delay='0.5s'
                >
                  <div className='about-right-content'>
                    <div className='section-heading'>
                      <h6>Sobre nós</h6>
                      <h4>
                        Descubra o Mundo <em>CraftHub</em>
                      </h4>
                      <div className='line-dec'></div>
                    </div>
                    <p>
                      Fundada em 2022, a CraftHub nasceu da paixão por conectar
                      talentos e necessidades. Nossos princípios são enraizados
                      na transparência, confiabilidade e excelência. Acreditamos
                      em criar uma comunidade onde prestadores e clientes possam
                      prosperar juntos, com respeito mútuo e comprometimento com
                      a qualidade. Na CraftHub, estamos dedicados a simplificar
                      o processo de encontrar e oferecer serviços, promovendo
                      relações positivas e duradouras.
                    </p>
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

export default About;
