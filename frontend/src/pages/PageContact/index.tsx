import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Contact;
