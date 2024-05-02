import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import ProviderItem from '../../components/ProviderItem';

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
                <h6>Recent News</h6>
                <h4>
                  Check Our Blog <em>Posts</em>
                </h4>
                <div className='line-dec'></div>
              </div>
            </div>
            <div
              className='col-lg-6 show-up wow fadeInUp'
              data-wow-duration='1s'
              data-wow-delay='0.3s'
            >
              <ProviderItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderList;
