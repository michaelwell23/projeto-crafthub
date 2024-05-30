import React from 'react';

import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <>
      <section id='contact' className='cta-section img-bg pt-110 pb-60'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-6 col-lg-7'>
              <div className='section-title mb-50'>
                <h1 className='mb-20 wow fadeInUp' data-wow-delay='.2s'>
                  Você é um profissional?
                </h1>
                <p className='wow fadeInUp' data-wow-delay='.4s'>
                  Se você é um profissional, cadastre-se! É muito fácil e você
                  pode receber diversas propostas de serviços.
                </p>
              </div>
            </div>
            <div className='col-xl-6 col-lg-5'>
              <div className='cta-btn text-lg-end mb-50'>
                <Link
                  to='/register-provider'
                  className='main-btn btn-hover text-uppercase'
                >
                  Se cadastrar como profissional
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
