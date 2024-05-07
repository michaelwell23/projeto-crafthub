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
  return (
    <>
      <Header />

      <h1>Page Services</h1>
    </>
  );
};

export default ServicesPage;
