import React from 'react';
import logo from '../resources/images/logo.png';
import resume from '../resources/personal/resume.pdf';

const About = () => (
  <div id='about' className='screen'>
    <section className='screen-section'>
      <img src={logo} alt='KevTLW' />
      <span className='title'>check my stuff out!</span>
      <nav className='social-links'>
        <a href={resume} target='_blank' rel='noopener noreferrer' className='button-black'>
          <i className='fas fa-file-alt fa-lg' /> resume
        </a>
        <a href='https://github.com/KevTLW/' target='_blank' rel='noopener noreferrer' className='button-black'>
          <i className='fab fa-github fa-lg' /> github
        </a>
        <a href='https://linkedin.com/in/KevTLW/' target='_blank' rel='noopener noreferrer' className='button-black'>
          <i className='fab fa-linkedin fa-lg' /> linkedin
        </a>
        <a href='mailto:kevinmcruzc@gmail.com' target='_blank' rel='noopener noreferrer' className='button-black'>
          <i className='fas fa-envelope fa-lg' /> email
        </a>
      </nav>
    </section>
  </div>
);

export default About;