import React from 'react';
import Icons from './Icons';

const Project = ({ project: { demo, desc, name, site, source, stack } }) => (
  <div className='project'>
    <img src={demo} alt={name} />
    <span className='title'>{name}</span>
    <span className='description'>{desc}</span>
    <section className='stack'>
      {stack.map(tech => (
        <Icons key={tech} name={tech} />
      ))}
    </section>
    {source === null ? (
      <button className='button-disabled-white' disabled>
        private source
      </button>
    ): (
      <a href={source} target='_blank' rel='noopener noreferrer' className='button-white button-source'>
        <i className='fas fa-code' /> view code
      </a>
    )}
    {site === null ? (
      <button className='button-disabled-white' disabled>
        private view
      </button>
    ): (
      <a href={site} target='_blank' rel='noopener noreferrer' className='button-white button-project'>
        view project <i className='fas fa-chevron-right' />
      </a>
    )}
  </div>
);

export default Project;