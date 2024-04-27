import React from 'react';
import Header from '../../components/Header';

import './styles.css';

import AboutImage from '../../assets/images/about-img.jpg';

const About = () => {
  return (
    <>
      <Header />
      <section className='page-about'>
        <div className='container'>
          <div className='about-text'>
            <h2>About</h2>
            <p>
              Em 2017, diante das dificuldades em encontrar profissionais
              confiáveis para serviços domésticos, uma equipe dedicada de
              empreendedores visionários uniu forças para criar uma solução
              inovadora. Inspirados pela paixão pela tecnologia e pelo
              compromisso com a transparência e a confiabilidade, eles deram
              vida à <span>CraftHub</span>, uma plataforma online que conecta
              clientes a profissionais qualificados. Com um time de
              desenvolvedores e designers talentosos, a <span>CraftHub</span>{' '}
              rapidamente se tornou um ponto de referência na comunidade local,
              oferecendo serviços confiáveis e excelentes. Desde então, nossa
              missão é proporcionar uma experiência tranquila e satisfatória
              para nossos clientes, ao mesmo tempo em que oferecemos
              oportunidades justas para os profissionais cadastrados em nossa
              plataforma. Com milhares de usuários satisfeitos e uma crescente
              rede de profissionais talentosos, na <span>CraftHub</span>,
              continuamos comprometidos em inovar e aprimorar nossos serviços,
              tornando a vida doméstica mais fácil e agradável para todos.
            </p>
          </div>
          <div className='about-ilustra'>
            <img src={AboutImage} alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
