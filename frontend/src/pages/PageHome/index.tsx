/* eslint-disable no-unreachable */
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import landing from '../../assets/images/ilustration.svg';
import searchIcon from '../../assets/images/icons/search.svg';
import registerIcon from '../../assets/images/icons/add_work.svg';
import heartIcon from '../../assets/images/icons/heart.svg';

import './styles.css';
import Header from '../../components/Header';

const Landing = () => {
  return (
    <>
      <Header />

      <section id='home' className='hero-section'>
        <div className='container'>
          <div className='row align-items-center position-relative'>
            <div className='col-lg-6'>
              <div className='hero-content'>
                <h1 className='wow fadeInUp' data-wow-delay='.4s'>
                  Your using free lite version
                </h1>
                <p className='wow fadeInUp' data-wow-delay='.6s'>
                  Please, purchase full version to get all sections, features
                  and permission to remove footer credit.
                </p>
                <a
                  href='javascript:void(0)'
                  className='main-btn  btn-1 border-btn btn-hover wow fadeInUp'
                  data-wow-delay='.6s'
                >
                  Purchase Now
                </a>
                <a
                  href='javascript:void(0)'
                  className='main-btn btn-2 border-btn btn-hover wow fadeInUp'
                  data-wow-delay='.6s'
                >
                  Purchase Now
                </a>
                <a href='#features' className='scroll-bottom'>
                  <i className='lni lni-arrow-down'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hero-img wow fadeInUp' data-wow-delay='.5s'>
                <img src={landing} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='features' className='feature-section pt-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-8 col-sm-10'>
              <div className='single-feature'>
                <div className='icon'>
                  <i className='lni lni-bootstrap'></i>
                </div>
                <div className='content'>
                  <h3>Praticidade</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-8 col-sm-10'>
              <div className='single-feature'>
                <div className='icon'>
                  <i className='lni lni-layout'></i>
                </div>
                <div className='content'>
                  <h3>Agilidade</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-8 col-sm-10'>
              <div className='single-feature'>
                <div className='icon'>
                  <i className='lni lni-coffee-cup'></i>
                </div>
                <div className='content'>
                  <h3>Custo Beneficio</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
