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
      <div id='provider-list' className='provider-list'>
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
                  Check Our provider-list <em>Posts</em>
                </h4>
                <div className='line-dec'></div>
              </div>

              <form id='search-teachers' onSubmit={() => {}}>
                <Select
                  name='subject'
                  label='Matéria'
                  options={[
                    { value: 'Artes', label: 'Artes' },
                    { value: 'Biologia', label: 'Biologia' },
                    { value: 'Ciências', label: 'Ciências' },
                    { value: 'Educação física', label: 'Educação física' },
                    { value: 'Física', label: 'Física' },
                    { value: 'Geografia', label: 'Geografia' },
                    { value: 'História', label: 'História' },
                    { value: 'Matemática', label: 'Matemática' },
                    { value: 'Português', label: 'Português' },
                    { value: 'Química', label: 'Química' },
                  ]}
                />
                <Select
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
                <Input type='time' name='time' />

                <button type='submit'>Buscar</button>
              </form>
            </div>
            <div
              className='col-lg-6 show-up wow fadeInUp'
              data-wow-duration='1s'
              data-wow-delay='0.3s'
            >
              <ProviderItem />
              <ProviderItem />
              <ProviderItem />
              <ProviderItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderList;
