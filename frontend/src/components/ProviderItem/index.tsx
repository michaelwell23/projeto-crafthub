import React from 'react';

import './style.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const ProviderItem: React.FC = () => {
  return (
    <>
      <div className='card-container'>
        <img
          className='round'
          src='https://randomuser.me/api/portraits/women/79.jpg'
          alt='user'
        />
        <h3>Ricky Park</h3>

        <span className='pro'>Designer</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          natus temporibus impedit quasi aut iusto minima pariatur. Ipsam
          debitis laudantium, pariatur et sunt beatae quidem quae autem eveniet
          laboriosam odit?
        </p>

        <div className='price'>
          <span>
            Preço/hora ou diária:
            <strong> R$ 120,00</strong>
          </span>
        </div>

        <div className='buttons'>
          <button className='primary'>
            <img src={whatsappIcon} alt='' />
            Whatsapp
          </button>
        </div>
      </div>
    </>
  );
};

export default ProviderItem;
