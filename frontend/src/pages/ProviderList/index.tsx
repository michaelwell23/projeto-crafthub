import React, { useState, useEffect, FormEvent } from 'react';

import Select from '../../components/Select';
import ProviderItem, { Provider } from '../../components/ProviderItem';

import Header from '../../components/Header';

import api from '../../services/api';

import './style.css';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  const [profession, setProfession] = useState('');

  async function searchProviders(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('services', {
      params: {
        profession,
      },
    });

    setProviders(response.data);
  }

  useEffect(() => {
    async function fetchAllProviders() {
      const response = await api.get('all-services');
      setProviders(response.data);
    }

    fetchAllProviders();
  }, []);

  return (
    <>
      <Header />
      <div id='provider' className='provider'>
        <div className='container'>
          <div className='row'>
            <div
              className='content col-lg-8 offset-lg-4 wow fadeInDown'
              data-wow-duration='1s'
              data-wow-delay='0.3s'
            >
              <div className='section-heading'>
                <h1>Encontre o Profissional que procura</h1>
                <h4>
                  Profissionais da <em>CraftHub</em>
                </h4>
                <div className='line-dec'></div>
              </div>
            </div>
            <form
              className='input-search col-lg-8 wow fadeInDown'
              onSubmit={searchProviders}
            >
              <Select
                name='profession'
                label='Pesquise a profissão'
                value={profession}
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
                    value: 'Técnico(a) de Manutenção de Aparelhos Eletronicos',
                    label: 'Técnico(a) de Manutenção de Aparelhos Eletronicos',
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
              <button type='submit' className='main-button '>
                Pesquisar
              </button>
            </form>
          </div>
          <div className='container-card'>
            {providers.map((provider: Provider) => {
              return <ProviderItem key={provider.id} provider={provider} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderList;
