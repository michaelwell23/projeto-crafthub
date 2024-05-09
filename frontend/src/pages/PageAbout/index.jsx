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
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quaerat dolorum fugit repellendus consectetur distinctio
                      nisi dicta, porro, beatae sed hic laboriosam aperiam
                      nesciunt laborum cumque tempora deserunt itaque?
                      Cupiditate, quam.
                      <a
                        rel='nofollow noreferrer'
                        href='http://paypal.me/templatemo'
                        target='_blank'
                      >
                        Laudantium perspiciatis voluptatibus temporibus modi
                        eius quae non. Delectus.
                      </a>{' '}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maxime, et, officiis in ratione exercitationem architecto
                      aspernatur nam repudiandae eos nesciunt, provident ad?
                      Explicabo voluptatem alias et beatae aspernatur cumque
                      inventore!
                      <a
                        href='https://templatemo.com/contact'
                        target='_blank'
                        rel='noreferrer'
                      >
                        support CraftHub
                      </a>{' '}
                      consectetur adipisicing elit. Nemo maiores expedita
                      explicabo. Ea dolorem minus odit, rerum aspernatur,
                      praesentium veritatis recusandae ducimus quae facilis
                      consequatur libero voluptate itaque velit numquam?
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
