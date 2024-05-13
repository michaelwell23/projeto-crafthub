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
                      <h6>About Us</h6>
                      <h4>
                        Who is DigiMedia <em>Agency</em>
                      </h4>
                      <div className='line-dec'></div>
                    </div>
                    <p>
                      o CraftHub entra em cena para simplificar a sua busca por
                      serviços confiáveis. Imagine poder encontrar rapidamente
                      um faxineiro para deixar a sua casa impecável, um
                      jardineiro para cuidar do seu jardim com expertise, um
                      limpador de piscina para manter a sua área de lazer sempre
                      pronta para uso, ou uma faxineira para ajudar nas tarefas
                      domésticas. No CraftHub, tornamos essa busca fácil e
                      conveniente. Com uma plataforma intuitiva e uma ampla gama
                      de profissionais cadastrados, você pode encontrar
                      exatamente o que precisa em apenas alguns cliques. Nossa
                      comunidade é composta por profissionais habilidosos e
                      comprometidos em oferecer um serviço de alta qualidade,
                      para que você possa confiar em nós para cuidar das suas
                      necessidades do dia a dia. Não importa se você está
                      procurando por serviços esporádicos ou deseja estabelecer
                      uma relação de longo prazo com um profissional de
                      confiança, o CraftHub está aqui para ajudar. Simplifique a
                      sua vida hoje mesmo e descubra como podemos tornar a busca
                      por serviços essenciais uma experiência simples e sem
                      complicações.
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
