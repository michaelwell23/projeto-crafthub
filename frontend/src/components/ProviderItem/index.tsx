import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

export interface Provider {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  email: string;
  profession: string;
  whatsapp: string;
}

interface ProviderItemProps {
  provider: Provider;
}

const ProviderItem: React.FC<ProviderItemProps> = ({ provider }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: provider.id,
    });
  }

  return (
    <>
      <div className='card wow fadeInUp '>
        <div className='header'>
          <div className='provider-info'>
            <a className='title' href='#'>
              {provider.name}
            </a>
            <p className='job'>{provider.profession}</p>
          </div>
          <div className='image'>
            <img src={provider.avatar} alt={provider.name} />
          </div>
        </div>
        <p className='description'>{provider.bio}</p>
        <dl className='post-info'>
          <div className='cr'>
            <dd className='dd'>Preço/Diária</dd>
            <dt className='dt'>
              R$ <span>{provider.cost}</span>
            </dt>
          </div>
          <div className='contact'>
            <a
              onClick={createNewConnection}
              href={`https://wa.me/${provider.whatsapp}`}
            >
              <img src={whatsappIcon} alt='' />
              Whatsapp
            </a>
          </div>
        </dl>
      </div>
    </>
  );
};

export default ProviderItem;
