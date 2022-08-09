import React from 'react';
import Typewriter from 'typewriter-effect';

const Type  = () => {
  return (
    <Typewriter
      options={{
        strings: ['Full Stack', 'Web', 'Front End', 'Back End'],
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default Type;