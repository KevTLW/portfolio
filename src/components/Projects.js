import React from 'react';
import Project from './Project';
import projects from '../resources/personal/projects';

const Projects = () => (
  <div id='projects'>
    <span className='title'>projects</span>
    <section className='projects'>
      {projects.map(project => (
        <Project key={project.desc} project={project} />
      ))}
    </section>
  </div>
);

export default Projects;