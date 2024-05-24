import React from 'react';

import Input from '../../components/Input';
import Select from '../../components/Select';
import ProviderItem from '../../components/ProviderItem';

import Header from '../../components/Header';

import './style.css';

const ProviderList = () => {
  return (
    <>
      <div id='provider' className='provider'>
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
            <form className='input-search col-lg-8 wow fadeInDown'>
              <Input name='' placeholder='Digite a profissão que você busca' />
            </form>
          </div>
          <div className='container-card'>
            <ProviderItem />
            <ProviderItem />
            <ProviderItem />
            <ProviderItem />
            <ProviderItem />
            <ProviderItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderList;
