import React from 'react';

import './style.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const ProviderItem: React.FC = () => {
  return (
    <>
      <div className='card wow fadeInUp '>
        <div className='header'>
          <div className='provider-info'>
            <a className='title' href='#'>
              John Doe
            </a>
            <p className='job'>Encanador</p>
          </div>
          <div className='image'>
            <img
              src='https://cdn-dlnki.nitrocdn.com/ekffXpIyDDSAfpoSydCcoJXYXKHyvGcR/assets/images/optimized/rev-46abe52/wp-content/uploads/2023/02/24426AptGr21147cTgF56613611.jpg'
              alt=''
            />
          </div>
        </div>
        <p className='description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
          illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
        </p>
        <dl className='post-info'>
          <div className='cr'>
            <dd className='dd'>Preço/Diária</dd>
            <dt className='dt'>
              R$ <span>120,00</span>
            </dt>
          </div>
          <div className='contact'>
            <a href=''>
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
