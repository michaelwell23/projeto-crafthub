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
      <div id='provider-form' className='provider-form-us section'>
        <div className='container'>
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
              className='container-form col-lg-8 wow fadeInUp'
              data-wow-duration='0.5s'
              data-wow-delay='0.25s'
            >
              <form id='provider-form' action='' method='post'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='provider-form-dec'>
                      <img src='assets/images/provider-form-dec.png' alt='' />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='fill-form'>
                      <div className='row'>
                        <div className='col-lg-'>
                          <fieldset>
                            <legend>Seus dados</legend>

                            <div className='personal-data'>
                              <Input name='name' placeholder='Nome Completo' />
                              <Input name='avatar' placeholder='Avatar' />
                              <Input name='whatsapp' placeholder='Whatsapp' />
                              <Textarea
                                name='biografia'
                                className='form-control'
                                id='message'
                                placeholder='Escreva sobre seu trabalho'
                              />
                            </div>
                          </fieldset>
                          <fieldset>
                            <legend>Dados do serviço</legend>

                            <div className='service-coast'>
                              {' '}
                              <Select
                                name='subject'
                                label='Matéria'
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
                              <Input
                                name='coast'
                                placeholder='Custo do Serviço (Diária)'
                              />
                            </div>
                          </fieldset>
                          <fieldset>
                            <legend>
                              Horários disponíveis
                              <a type='button'>+ Novo horário</a>
                            </legend>

                            <div className='schedule-item'>
                              <Select
                                className='col-lg-8'
                                name='week_day'
                                label='Dia da semana'
                                options={[
                                  { value: '0', label: 'Domingo' },
                                  { value: '1', label: 'Segunda-feira' },
                                  { value: '2', label: 'Terça-feira' },
                                  { value: '3', label: 'Quarta-feira' },
                                  { value: '4', label: 'Quinta-feira' },
                                  { value: '5', label: 'Sexta-feira' },
                                  { value: '6', label: 'Sábado' },
                                ]}
                              />
                              <Input
                                // className='col-lg-6'
                                name='from'
                                type='time'
                              />
                              <Input
                                // className='col-lg-6'
                                name='to'
                                type='time'
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
                              Salvar Cadastro
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
