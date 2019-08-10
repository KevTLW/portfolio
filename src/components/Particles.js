import React from 'react'

const Particles = () => (
  <div id='particles'>
    {[...Array(100)].map(i => <span className='particle' key={i}></span>)}
  </div>
);

export default Particles;