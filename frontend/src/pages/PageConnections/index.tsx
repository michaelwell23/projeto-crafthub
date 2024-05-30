import React, { useEffect, useState } from 'react';

import './styles.css';

import CouterUp from '../../assets/images/counter-up/counter-up-img.svg';
import api from '../../services/api';

export const getUserCount = async (): Promise<number> => {
  const response = await api.get('/count/users');
  return response.data.count;
};

const PageConnections: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/count/users').then((response) => {
      const { count } = response.data;

      setCount(count);
    });
  }, []);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <>
      <section id='connections' className='counter-up-section pt-150'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='counter-up-content mb-50'>
                <div className='section-title mb-40'>
                  <h1 className='mb-20 wow fadeInUp' data-wow-delay='.2s'>
                    Por que somos os melhores?
                  </h1>
                  <p className='wow fadeInUp' data-wow-delay='.4s'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                </div>
                <div className='counter-up-wrapper'>
                  <div className='row'>
                    <div className='col-lg-6 col-sm-6'>
                      <div className='single-counter'>
                        <div className='icon color-1'>
                          <i className='lni lni-emoji-smile'></i>
                        </div>
                        <div className='content'>
                          {count !== null ? (
                            <h1
                              id='secondo1'
                              className='countup'
                              cup-end='3642'
                              cup-append=' '
                            >
                              {count}
                            </h1>
                          ) : (
                            <p>Carregando...</p>
                          )}
                          <span>Profissionais Cadastrados</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-sm-6'>
                      <div className='single-counter'>
                        <div className='icon color-2'>
                          <i className='lni lni-checkmark'></i>
                        </div>
                        <div className='content'>
                          <h1
                            id='secondo2'
                            className='countup'
                            cup-end={totalConnections}
                            cup-append=' '
                          >
                            {totalConnections}
                          </h1>
                          <span>Conexões com profissionais</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-sm-6'>
                      <div className='single-counter'>
                        <div className='icon color-3'>
                          <i className='lni lni-world'></i>
                        </div>
                        <div className='content'>
                          <h1
                            id='secondo3'
                            className='countup'
                            cup-end='642'
                            cup-append='K'
                          >
                            642
                          </h1>
                          <span>Profissões</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-sm-6'>
                      <div className='single-counter'>
                        <div className='icon color-4'>
                          <i className='lni lni-users'></i>
                        </div>
                        <div className='content'>
                          <h1
                            id='secondo4'
                            className='countup'
                            cup-end='42'
                            cup-append=' '
                          >
                            42
                          </h1>
                          <span>Pessoas satisfeitas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6'>
              <div className='counter-up-img mb-50'>
                <img src={CouterUp} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageConnections;
