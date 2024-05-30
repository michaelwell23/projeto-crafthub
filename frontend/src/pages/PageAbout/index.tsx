import React, { useState } from 'react';

import './style.css';
import AboutImg from '../../assets/images/about/about-img.svg';

const AboutSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='about' className='about-section pt-150'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='about-img mb-50'>
              <img src={AboutImg} alt='about' />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='about-content mb-50'>
              <div className='section-title mb-50'>
                <h1 className='mb-25'>Read more about is CraftHub</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores.
                </p>
              </div>
              <div className='accordion pb-15' id='accordionExample'>
                {[
                  {
                    question: 'Which Service We Provide?',
                    answer:
                      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
                  },
                  {
                    question: 'What I need to start design?',
                    answer:
                      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
                  },
                  {
                    question: 'What is our design process?',
                    answer:
                      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
                  },
                ].map((item, index) => (
                  <div className='single-faq' key={index}>
                    <button
                      className={`w-100 text-start ${
                        activeIndex === index ? '' : 'collapsed'
                      }`}
                      type='button'
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                    >
                      {item.question}
                    </button>

                    <div
                      className={`collapse ${
                        activeIndex === index ? 'show' : ''
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent='#accordionExample'
                    >
                      <div className='faq-content'>{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href='javascript:void(0)' className='main-btn btn-hover'>
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
