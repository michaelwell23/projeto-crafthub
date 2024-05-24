import React from 'react';

import './styles.css';

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
    </>
  );
};

export default PageServices;
