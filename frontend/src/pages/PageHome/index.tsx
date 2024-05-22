/* eslint-disable no-unreachable */
import React from 'react';
import { Link } from 'react-router-dom';

import landing from '../../assets/images/hero/ilustration.svg';
import graygrids from '../../assets/images/client-logo/graygrids.svg';
import lineicons from '../../assets/images/client-logo/lineicons.svg';
import pagebulb from '../../assets/images/client-logo/pagebulb.svg';
import uideck from '../../assets/images/client-logo/uideck.svg';

import './styles.css';
import Header from '../../components/Header';

const Landing = () => {
  return (
    <>
      <Header />
      <section id='home' className='hero-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='hero-content'>
                <span className='wow fadeInLeft' data-wow-delay='.2s'>
                  Welcome To Bliss
                </span>
                <h1 className='wow fadeInUp' data-wow-delay='.4s'>
                  You are using free lite version of Bliss.
                </h1>
                <p className='wow fadeInUp' data-wow-delay='.6s'>
                  Please, purchase full version of the template to get all
                  sections, elements and permission to remove footer credits.
                </p>
                <a
                  href='/'
                  className='main-btn btn-hero btn-hover wow fadeInUp'
                  data-wow-delay='.6s'
                >
                  Buscar Profissionais
                </a>
                <a
                  href='/'
                  className='main-btn2 btn-hero2 btn-hover wow fadeInUp'
                  data-wow-delay='.6s'
                >
                  Seja um Profissional
                </a>
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

      <section id='about' className='about-section pt-150'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='about-img mb-50'>
                <img src='assets/img/about/about-img.svg' alt='about' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='about-content mb-50'>
                <div className='section-title mb-50'>
                  <h1 className='mb-25'>Read more about our Digital Agency</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores.
                  </p>
                </div>
                <div className='accordion pb-15' id='accordionExample'>
                  <div className='single-faq'>
                    <button
                      className='w-100 text-start'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      Which Service We Provide?
                    </button>

                    <div
                      id='collapseOne'
                      className='collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='faq-content'>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                      </div>
                    </div>
                  </div>
                  <div className='single-faq'>
                    <button
                      className='w-100 text-start collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      What I need to start design?
                    </button>
                    <div
                      id='collapseTwo'
                      className='collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='faq-content'>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                      </div>
                    </div>
                  </div>
                  <div className='single-faq'>
                    <button
                      className='w-100 text-start collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      What is our design process?
                    </button>
                    <div
                      id='collapseThree'
                      className='collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='faq-content'>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                      </div>
                    </div>
                  </div>
                </div>
                <a href='javascript:void(0)' className='main-btn btn-hover'>
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
