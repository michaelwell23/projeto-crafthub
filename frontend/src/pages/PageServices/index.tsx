import React from 'react';

import baba from '../../assets/images/service/baba.png';
import cuidadora from '../../assets/images/service/cuidador.png';
import eletricista from '../../assets/images/service/eletricista.png';
import encanador from '../../assets/images/service/encanador.png';

import './styles.css';
import { Link } from 'react-router-dom';

const PageServices: React.FC = () => {
  return (
    <>
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
                  <img src={baba} alt='' />
                </div>
                <div className='content'>
                  <h3>Babá</h3>
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
                  <img src={cuidadora} alt='' />
                </div>
                <div className='content'>
                  <h3>Cuidador(a)</h3>
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
                  <img src={eletricista} alt='' />
                </div>
                <div className='content'>
                  <h3>Eletricista</h3>
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
                  <img src={encanador} alt='' />
                </div>
                <div className='content'>
                  <h3>Encanador</h3>
                  <p>
                    Lorem ipsum dolor sitsdw consetsad pscing eliewtr, diam
                    nonumy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id='connections' className='view-all-btn text-center pt-30'>
            <Link to='/search-provider' className='main-btn btn-hover'>
              Deseja buscar um profisional?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageServices;
