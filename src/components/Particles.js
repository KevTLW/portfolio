import React from 'react'

const Particles = () => (
  <div id='particles'>
    {[...Array(100)].map((_, i) => (
      <span className='particle' key={i}></span>)
    )}
  </div>
);

export default Particles;