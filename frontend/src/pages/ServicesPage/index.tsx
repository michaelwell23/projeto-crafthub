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
      <section className='services'>
        <div className='container'>
          <div className='ilustra-section'>
            <img src={ServiceImg} alt='' />
            <h3>Utilizar o CraftHub é simples e conveniente. </h3>
            <p>
              Utilizar o CraftHub é simples e conveniente. Basta pesquisar o
              serviço desejado, explorar os perfis dos profissionais, entrar em
              contato diretamente via WhatsApp e discutir os detalhes do
              serviço. Após a conclusão, deixe uma avaliação para ajudar outros
              usuários. Experimente hoje e descubra como podemos tornar a
              contratação de serviços mais fácil e rápida para você!
            </p>
          </div>
          <div className='services-list'>
            <h3>
              Busque pelo profissional ideal de acordo com a sua necessidade
            </h3>
            <p>
              Abaixo você pode conferir alguns profissionais que você pode
              encontrar na plataforma.
            </p>
            <ul>
              <li>
                <img src={cozinheiro} alt='' />
                <p>Cozinheiros</p>
              </li>
              <li>
                <img src={carpinteiro} alt='' />
                <p>Carpinteiros</p>
              </li>
              <li>
                <img src={eletricista} alt='' />
                <p>Eletricistas</p>
              </li>
              <li>
                <img src={detetizador} alt='' />
                <p>Detetizadores</p>
              </li>
              <li>
                <img src={encanador} alt='' />
                <p>Encanadores</p>
              </li>
              <li>
                <img src={faxineira} alt='' />
                <p>Faxineiros</p>
              </li>
            </ul>
            <p className='footer-text'>E muito outros profissionai!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
