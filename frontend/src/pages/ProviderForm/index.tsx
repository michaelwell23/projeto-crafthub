import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import arrowLeft from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.png';

import './style.css';

const ProviderForm = () => {
  return (
    <>
      <div id='provider-form' className='provider-form-us section'>
        <div className='container'>
          <header>
            <Link to='/' className='link-back'>
              <img className='back' src={arrowLeft} alt='' />
            </Link>

            <img className='logo' src={logo} alt='' />
          </header>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div
                className='section-heading wow fadeIn'
                data-wow-duration='1s'
                data-wow-delay='0.5s'
              >
                <h6>Cadastro de Prestadores</h6>
                <h4>
                  Faça o seu cadastro na <em>CraftHub</em>
                </h4>
                <div className='line-dec'></div>
              </div>
            </div>
            <div
              className='container-form col-lg-12 wow fadeInUp'
              data-wow-duration='0.5s'
              data-wow-delay='0.25s'
            >
              <form id='provider-form' action='' method='post'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='provider-form-dec'>
                      <img src='assets/images/provider-form-dec.png' alt='' />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='fill-form'>
                      <div className='row'>
                        <div className='col-lg-'>
                          <Input />
                          <Input />
                          <Input />
                          <Input />
                          <Input />
                          <Input />
                        </div>
                        <div className='col-lg-12'>
                          <fieldset>
                            <button
                              type='submit'
                              id='form-submit'
                              className='main-button '
                            >
                              Send Message Now
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderForm;
