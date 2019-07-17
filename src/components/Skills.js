import React from 'react';
import Icons from './Icons';
import skills from '../resources/personal/skills';

const Skills = () => (
  <div id='skills' className='screen-section'>
    <span className='title'>interested in working together?</span>
    <span className='subtitle'>let's make something special!</span>
    <br />
    <span className='description'>i have experience with:</span>
    <section className='stack'>
      <div className='stack-animation'>
        {skills.map((skill, i) => (
          <Icons key={i} name={skill.name} fill={skill.fill} />
        ))}
      </div>
    </section>
    <a href='mailto:kevinmcruzc@gmail.com' target='_blank' rel='noopener noreferrer' className='button-black'>
      get in touch
    </a>
  </div>
);

export default Skills;