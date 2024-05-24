import React from 'react';

import './styles.css';

const PageFooter: React.FC = () => {
  return (
    <>
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
                      <a href='javascript:void(0)'>Inicio</a>{' '}
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Sobre</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Serviços</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Conexões</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>Contato</a>
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
                    <li>+5511943726323</li>
                    <li>contato@crafthub.ccom</li>
                    <li>São Paulo, Brasil</li>
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
              Desenvolvido por{' '}
              <a
                href='https://www.linkedin.com/in/michael-wellington-lopes/'
                rel='nofollow noreferrer'
                target='_blank'
              >
                Michael Wellington Lopes
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PageFooter;
