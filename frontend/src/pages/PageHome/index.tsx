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

      <section
        id='service'
        className='service-section img-bg pt-100 pb-100 mt-150'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xxl-5 col-xl-6 col-lg-7 col-md-10'>
              <div className='section-title text-center mb-50'>
                <h1>Our services</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt labore.
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-service'>
                <div className='icon color-1'>
                  <i className='lni lni-layers'></i>
                </div>
                <div className='content'>
                  <h3>UI/UX design</h3>
                  <p>
                    Lorem ipsum dolor sitsdw consetsad pscing eliewtr, diam
                    nonumy.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-service'>
                <div className='icon color-2'>
                  <i className='lni lni-code-alt'></i>
                </div>
                <div className='content'>
                  <h3>Web design</h3>
                  <p>
                    Lorem ipsum dolor sitsdw consetsad pscing eliewtr, diam
                    nonumy.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-service'>
                <div className='icon color-3'>
                  <i className='lni lni-pallet'></i>
                </div>
                <div className='content'>
                  <h3>Graphics design</h3>
                  <p>
                    Lorem ipsum dolor sitsdw consetsad pscing eliewtr, diam
                    nonumy.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-service'>
                <div className='icon color-4'>
                  <i className='lni lni-vector'></i>
                </div>
                <div className='content'>
                  <h3>Brand design</h3>
                  <p>
                    Lorem ipsum dolor sitsdw consetsad pscing eliewtr, diam
                    nonumy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id='connections' className='view-all-btn text-center pt-30'>
            <a href='javascript:void(0)' className='main-btn btn-hover'>
              View All Services
            </a>
          </div>
        </div>
      </section>

      <section className='counter-up-section pt-150'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='counter-up-content mb-50'>
                <div className='section-title mb-40'>
                  <h1 className='mb-20 wow fadeInUp' data-wow-delay='.2s'>
                    Why we are the best, Why you hire?
                  </h1>
                  <p className='wow fadeInUp' data-wow-delay='.4s'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                </div>
                <div className='counter-up-wrapper'>
                  <div className='row'>
                    <div className='col-lg-6 col-sm-6'>
                      <div className='single-counter'>
                        <div className='icon color-1'>
                          <i className='lni lni-emoji-smile'></i>
                        </div>
                        <div className='content'>
                          <h1
                            id='secondo1'
                            className='countup'
                            cup-end='3642'
                            cup-append=' '
                          >
                            3642
                          </h1>
                          <span>Happy client</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-sm-6'>
                      <div className='single-counter'>
                        <div className='icon color-2'>
                          <i className='lni lni-checkmark'></i>
                        </div>
                        <div className='content'>
                          <h1
                            id='secondo2'
                            className='countup'
                            cup-end='5436'
                            cup-append=' '
                          >
                            5436
                          </h1>
                          <span>Project done</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-sm-6'>
                      <div className='single-counter'>
                        <div className='icon color-3'>
                          <i className='lni lni-world'></i>
                        </div>
                        <div className='content'>
                          <h1
                            id='secondo3'
                            className='countup'
                            cup-end='642'
                            cup-append='K'
                          >
                            642
                          </h1>
                          <span>Live Design</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-sm-6'>
                      <div className='single-counter'>
                        <div className='icon color-4'>
                          <i className='lni lni-users'></i>
                        </div>
                        <div className='content'>
                          <h1
                            id='secondo4'
                            className='countup'
                            cup-end='42'
                            cup-append=' '
                          >
                            42
                          </h1>
                          <span>Creative designer's</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6'>
              <div className='counter-up-img mb-50'>
                <img src='assets/img/counter-up/counter-up-img.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='cta-section img-bg pt-110 pb-60'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-6 col-lg-7'>
              <div className='section-title mb-50'>
                <h1 className='mb-20 wow fadeInUp' data-wow-delay='.2s'>
                  Have any project in you mind? You can hire
                </h1>
                <p className='wow fadeInUp' data-wow-delay='.4s'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt.
                </p>
              </div>
            </div>
            <div className='col-xl-6 col-lg-5'>
              <div className='cta-btn text-lg-end mb-50'>
                <a
                  href='javascript:void(0)'
                  className='main-btn btn-hover text-uppercase'
                >
                  LET'S START YOUR PROJECT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='container'>
          <div className='widget-wrapper'>
            <div className='row'>
              <div className='col-xl-3 col-md-6'>
                <div className='footer-widget'>
                  <div className='logo mb-35'>
                    <a href='index.html'>
                      <img src='assets/img/logo/logo.svg' alt='' />
                    </a>
                  </div>
                  <p className='desc mb-35'>
                    We are expert designer team, There have a lot of designer
                    and developer If you have any project you can hire Create a
                    website.
                  </p>
                  <ul className='socials'>
                    <li>
                      <a href='jvascript:void(0)'>
                        {' '}
                        <i className='lni lni-facebook-filled'></i>{' '}
                      </a>
                    </li>
                    <li>
                      <a href='jvascript:void(0)'>
                        {' '}
                        <i className='lni lni-twitter-filled'></i>{' '}
                      </a>
                    </li>
                    <li>
                      <a href='jvascript:void(0)'>
                        {' '}
                        <i className='lni lni-instagram-filled'></i>{' '}
                      </a>
                    </li>
                    <li>
                      <a href='jvascript:void(0)'>
                        {' '}
                        <i className='lni lni-linkedin-original'></i>{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-xl-2 offset-xl-1 col-md-5 offset-md-1 col-sm-6'>
                <div className='footer-widget'>
                  <h3>Link</h3>
                  <ul className='links'>
                    <li>
                      <a href='javascript:void(0)'>Home</a>{' '}
                    </li>
                    <li>
                      <a href='javascript:void(0)'>About</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Services</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Portfolio</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Pricing</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Team</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-xl-3 col-md-6 col-sm-6'>
                <div className='footer-widget'>
                  <h3>Services</h3>
                  <ul className='links'>
                    <li>
                      <a href='javascript:void(0)'>Graphic design</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Web design</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Visual design</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Product design</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>UI/UX design</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Web development</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Startup business</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-xl-3 col-md-6'>
                <div className='footer-widget'>
                  <h3>Contact</h3>
                  <ul>
                    <li>+003894372632</li>
                    <li>helldesigner@gmail.ccom</li>
                    <li>United state of America</li>
                  </ul>
                  <div className='contact_map'>
                    <div className='gmap_canvas'>
                      <iframe
                        id='gmap_canvas'
                        src='https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='copy-right'>
            <p>
              Design and Developed by
              <a
                href='https://uideck.com'
                rel='nofollow noreferrer'
                target='_blank'
              >
                UIdeck
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
