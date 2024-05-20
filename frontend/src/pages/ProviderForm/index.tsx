import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import Select from '../../components/Select';

import './style.css';

const ProviderForm = () => {
  return (
    <>
      <div id='contact' className='contact-us section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div
                className='section-heading wow fadeIn'
                data-wow-duration='1s'
                data-wow-delay='0.5s'
              >
                <h6>Contact Us</h6>
                <h4>
                  Get In Touch With Us <em>Now</em>
                </h4>
                <div className='line-dec'></div>
              </div>
            </div>
            <div
              className='container-form col-lg-8 wow fadeInUp'
              data-wow-duration='0.5s'
              data-wow-delay='0.25s'
            >
              <form id='contact' action='' method='post'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='fill-form'>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <legend>Dados do prestador</legend>
                          <fieldset>
                            <Input
                              type='name'
                              name='name'
                              id='name'
                              placeholder='Nome'
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              type='text'
                              name='avatar'
                              id='subjetc'
                              placeholder='Imagem'
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              type='text'
                              name='email'
                              id='email'
                              placeholder='Seu E-mail'
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              type='phone'
                              name='whatsapp'
                              id='phone'
                              placeholder='Telefone (Whatsapp)'
                            />
                          </fieldset>

                          <fieldset>
                            <Textarea
                              name='message'
                              className='form-control'
                              id='message'
                              placeholder='Sobre seu trabalho'
                            />
                          </fieldset>
                        </div>
                        <div className='col-lg-12'>
                          <legend>Sobre o serviço</legend>
                          <fieldset>
                            <Select
                              name=''
                              label=''
                              options={[
                                { value: 'Encanador', label: 'Encanador' },
                                { value: 'Faxineiro', label: 'Faxineiro' },
                                {
                                  value: 'Manutenção de ar condicionado',
                                  label: 'Manutenção de ar condicionado',
                                },
                                { value: 'Jardineiro', label: 'Jardineiro' },
                                {
                                  value: 'Limpador de piscina',
                                  label: 'Limpador de piscina',
                                },
                              ]}
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              name='cost'
                              type='number'
                              id='cost'
                              placeholder='valor do serviço'
                            />
                          </fieldset>
                          <fieldset>
                            <div className='col-lg-12 schedule-item'>
                              <Input
                                name='from'
                                type='time'
                                placeholder='Horario de inicio'
                              />
                              <Input
                                name='to'
                                type='time'
                                placeholder='Horario de término'
                              />
                            </div>
                          </fieldset>
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
