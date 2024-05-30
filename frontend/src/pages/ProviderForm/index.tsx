import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import Select from '../../components/Select';

import Header from '../../components/Header';

import './style.css';

const ProviderForm = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [profession, setProfession] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([{ from: '', to: '' }]);

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateServices(e: FormEvent) {
    e.preventDefault();

    api
      .post('services', {
        name,
        avatar,
        email,
        whatsapp,
        bio,
        profession,
        cost,
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!');

        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro');
      });
  }

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
                <h1>Cadastre-se</h1>
                <h4>
                  Cadastre-se para receber propostas de trabalho de acordo com
                  sua especialização.
                </h4>
                <div className='line-dec'></div>
              </div>
            </div>
            <div
              className='container-form col-lg-8 wow fadeInUp'
              data-wow-duration='0.5s'
              data-wow-delay='0.25s'
            >
              <form id='form' onSubmit={handleCreateServices}>
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
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              type='text'
                              name='avatar'
                              id='subjetc'
                              placeholder='Imagem'
                              onChange={(e) => {
                                setAvatar(e.target.value);
                              }}
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              type='text'
                              name='email'
                              id='email'
                              placeholder='Seu E-mail'
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              type='phone'
                              name='whatsapp'
                              id='phone'
                              placeholder='Telefone (Whatsapp)'
                              onChange={(e) => {
                                setWhatsapp(e.target.value);
                              }}
                            />
                          </fieldset>

                          <fieldset>
                            <Textarea
                              name='message'
                              className='form-control'
                              id='message'
                              placeholder='Sobre seu trabalho'
                              onChange={(e) => {
                                setBio(e.target.value);
                              }}
                            />
                          </fieldset>
                        </div>
                        <div className='col-lg-12'>
                          <legend className='provider-data'>
                            Dados do prestador
                          </legend>
                          <fieldset>
                            <Select
                              name='profession'
                              label='Sua Profissão'
                              onChange={(e) => {
                                setProfession(e.target.value);
                              }}
                              options={[
                                {
                                  value: 'Arrumador(a)',
                                  label: 'Arrumador(a)',
                                },
                                { value: 'Babá', label: 'Babá' },
                                { value: 'Caseiro(a)', label: 'Caseiro(a)' },
                                {
                                  value: 'Cuidador(a) de Idosos',
                                  label: 'Cuidador(a) de Idosos',
                                },
                                { value: 'Diarista', label: 'Diarista' },
                                { value: 'Eletricista', label: 'Eletricista' },
                                {
                                  value: 'Encanador(a)',
                                  label: 'Encanador(a)',
                                },
                                {
                                  value: 'Faxineiro(a)',
                                  label: 'Faxineiro(a)',
                                },
                                { value: 'Gesseiro(a)', label: 'Gesseiro(a)' },
                                {
                                  value: 'Jardineiro(a)',
                                  label: 'Jardineiro(a)',
                                },
                                {
                                  value: 'Lavador(a) de Janelas',
                                  label: 'Lavador(a) de Janelas',
                                },
                                {
                                  value: 'Limpador(a) de Piscinas',
                                  label: 'Limpador(a) de Piscinas',
                                },
                                {
                                  value: 'Manutenção de ar condicionado',
                                  label: 'Manutenção de ar condicionado',
                                },
                                {
                                  value: 'Marceneiro(a)',
                                  label: 'Marceneiro(a)',
                                },
                                {
                                  value: 'Montador(a) de Móveis',
                                  label: 'Montador(a) de Móveis',
                                },
                                {
                                  value: 'Organizador(a) Profissional',
                                  label: 'Organizador(a) Profissional',
                                },
                                { value: 'Passadeira', label: 'Passadeira' },
                                { value: 'Pedreiro(a)', label: 'Pedreiro(a)' },
                                { value: 'Pintor(a)', label: 'Pintor(a)' },
                                {
                                  value: 'Técnico(a) de Aparelhos Domésticos',
                                  label: 'Técnico(a) de Aparelhos Domésticos',
                                },
                                {
                                  value:
                                    'Técnico(a) de Manutenção de Aparelhos Eletronicos',
                                  label:
                                    'Técnico(a) de Manutenção de Aparelhos Eletronicos',
                                },
                                {
                                  value: 'Técnico(a) de Computadores',
                                  label: 'Técnico(a) de Computadores',
                                },
                                {
                                  value: 'Técnico(a) em Segurança Residencial',
                                  label: 'Técnico(a) em Segurança Residencial',
                                },
                                { value: 'Zelador(a)', label: 'Zelador(a)' },
                              ]}
                            />
                          </fieldset>
                          <fieldset>
                            <Input
                              name='cost'
                              type='number'
                              id='cost'
                              placeholder='valor do serviço'
                              onChange={(e) => {
                                setCost(e.target.value);
                              }}
                            />
                          </fieldset>
                          <fieldset>
                            {scheduleItems.map((scheduleItem, index) => {
                              return (
                                <div className='col-lg-12 schedule-item'>
                                  <Input
                                    name='from'
                                    type='time'
                                    placeholder='Horario de inicio'
                                    value={scheduleItem.from}
                                    onChange={(e) =>
                                      setScheduleItemValue(
                                        index,
                                        'from',
                                        e.target.value
                                      )
                                    }
                                  />
                                  <Input
                                    name='to'
                                    type='time'
                                    placeholder='Horario de término'
                                    value={scheduleItem.to}
                                    onChange={(e) =>
                                      setScheduleItemValue(
                                        index,
                                        'to',
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              );
                            })}
                          </fieldset>
                        </div>
                        <div className='col-lg-12'>
                          <fieldset>
                            <button type='submit' className='main-button '>
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
