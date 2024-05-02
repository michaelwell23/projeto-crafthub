import React from 'react';

// import { Container } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const ProviderItem: React.FC = () => {
  return (
    <>
      <div className='blog-post'>
        <div className='thumb'>
          <a href='#'>
            <img src='assets/images/blog-post-01.jpg' alt='' />
          </a>
        </div>
        <div className='down-content'>
          <span className='category'>SEO Analysis</span>
          <span className='date'>03 August 2021</span>
          <a href='#'>
            <h4>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adelore Eiusmod Tempor
              Incididunt
            </h4>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
            itii eiumod deis tempor incididunt ut labore.
          </p>
          <span className='author'>
            <img src='assets/images/author-post.jpg' alt='' />
            By: Andrea Mentuzi
          </span>
          <div className='border-first-button'>
            <a href='#'>Discover More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderItem;
