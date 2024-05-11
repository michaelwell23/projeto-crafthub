import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import ProviderItem from '../../components/ProviderItem';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './style.css';

const ProviderList = () => {
  return (
    <>
      <Header />
      <div id='blog' className='blog'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-4 offset-lg-4  wow fadeInDown'
              data-wow-duration='1s'
              data-wow-delay='0.3s'
            >
              <div className='section-heading'>
                <h6>Encontre o Profissional que procura</h6>
                <h4>
                  Profissionais da <em>CraftHub</em>
                </h4>
                <div className='line-dec'></div>
              </div>
            </div>
          </div>

          <div className='shell'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='wsk-cp-product'>
                    <div className='wsk-cp-img'>
                      <img
                        src='https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg'
                        alt='Product'
                        className='img-responsive'
                      />
                    </div>
                    <div className='wsk-cp-text'>
                      <div className='category'>
                        <span>Ethnic</span>
                      </div>
                      <div className='title-product'>
                        <h3>My face not my heart</h3>
                      </div>
                      <div className='description-prod'>
                        <p>
                          Description Product tell me how to change playlist
                          height size like 600px in html5 player. player good
                          work now check this link
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='wcf-left'>
                          <p>
                            Preço/Diária:
                            <span className='price'> 250,00</span>
                          </p>
                        </div>
                        <div className='wcf-right'>
                          <a href='#' className='buy-btn'>
                            <i className='zmdi zmdi-shopping-basket'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='wsk-cp-product'>
                    <div className='wsk-cp-img'>
                      <img
                        src='https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg'
                        alt='Product'
                        className='img-responsive'
                      />
                    </div>
                    <div className='wsk-cp-text'>
                      <div className='category'>
                        <span>Introvert</span>
                      </div>
                      <div className='title-product'>
                        <h3>My face not my heart</h3>
                      </div>
                      <div className='description-prod'>
                        <p>
                          Description Product tell me how to change playlist
                          height size like 600px in html5 player. player good
                          work now check this link
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='wcf-left'>
                          <p>
                            Preço/Diária:
                            <span className='price'> 250,00</span>
                          </p>
                        </div>
                        <div className='wcf-right'>
                          <a href='#' className='buy-btn'>
                            <i className='zmdi zmdi-shopping-basket'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='wsk-cp-product'>
                    <div className='wsk-cp-img'>
                      <img
                        src='https://1.bp.blogspot.com/-XL_Ba-178Fo/WVSvm5AbApI/AAAAAAAAAK4/X5109HTqUiAhPjbmz4NFVHcpL7ZWe6T3ACPcBGAYYCw/s1600/wow-29.jpg'
                        alt='Product'
                        className='img-responsive'
                      />
                    </div>
                    <div className='wsk-cp-text'>
                      <div className='category'>
                        <span>Designer</span>
                      </div>
                      <div className='title-product'>
                        <h3>Maria Doe</h3>
                      </div>
                      <div className='description-prod'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum vero nobis, est animi unde molestias
                          neque, laborum voluptatibus sit architecto laboriosam
                          porro velit mollitia! Explicabo excepturi dolorum aut
                          quisquam voluptates.
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='wcf-left'>
                          <p>
                            Preço/Diária:
                            <span className='price'> 250,00</span>
                          </p>
                        </div>
                        <div className='wcf-right'>
                          <a href='#' className='buy-btn'>
                            <img src={whatsapp} alt='' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='wsk-cp-product'>
                    <div className='wsk-cp-img'>
                      <img
                        src='https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg'
                        alt='Product'
                        className='img-responsive'
                      />
                    </div>
                    <div className='wsk-cp-text'>
                      <div className='category'>
                        <span>Drama</span>
                      </div>
                      <div className='title-product'>
                        <h3>My face not my heart cvf ggf gfg g</h3>
                      </div>
                      <div className='description-prod'>
                        <p>
                          Description Product tell me how to change playlist
                          height size like 600px in html5 player. player good
                          work now check this link
                        </p>
                      </div>
                      <div className='card-footer'>
                        <div className='wcf-left'>
                          <p>
                            Preço/Diária:
                            <span className='price'> 250,00</span>
                          </p>
                        </div>
                        <div className='wcf-right'>
                          <a href='#' className='buy-btn'>
                            <i className='zmdi zmdi-shopping-basket'></i>
                          </a>
                        </div>
                      </div>
                    </div>
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

export default ProviderList;
