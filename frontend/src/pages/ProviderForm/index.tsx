import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Header from '../../components/Header';
import Select from '../../components/Select';

import './style.css';

const ProviderForm = () => {
  return (
    <>
      <Header />

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
                              type='subject'
                              name='subject'
                              id='subject'
                              placeholder='Imagem'
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              type='text'
                              name='email'
                              id='email'
                              pattern='[^ @]*@[^ @]*'
                              placeholder='Seu E-mail'
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              type='phone'
                              name='whatsapp'
                              id='subject'
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
                          <Select
                            name=''
                            label=''
                            options={[
                              { value: 'Artes', label: 'Artes' },
                              { value: 'Biologia', label: 'Biologia' },
                              { value: 'Ciências', label: 'Ciências' },
                              {
                                value: 'Educação física',
                                label: 'Educação física',
                              },
                              { value: 'Física', label: 'Física' },
                              { value: 'Geografia', label: 'Geografia' },
                              { value: 'História', label: 'História' },
                              { value: 'Matemática', label: 'Matemática' },
                              { value: 'Português', label: 'Português' },
                              { value: 'Química', label: 'Química' },
                            ]}
                          />

                          <Input name='cost' />

                          <fieldset>
                            <legend>Horários disponíveis</legend>

                            <div className='col-lg-6 schedule-item'>
                              <Input name='from' type='time' />
                              <Input name='to' type='time' />
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
