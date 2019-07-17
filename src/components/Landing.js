import React from 'react';
import { Link } from 'react-scroll';
import Wave from './Wave';

const Landing = () => (
  <>
    <div id='landing' className='screen bg-black fg-white'>
      <section className='screen-section-full'>
        <span className='title'>kev</span>
        <span className='subtitle'>full stack web developer</span>
        <Link to='wave' smooth={true} duration={1000} className='bounce'>
          <i className='fas fa-chevron-down fa-lg' />
        </Link>
      </section>
    </div>
    <Wave />
  </>
);

export default Landing;