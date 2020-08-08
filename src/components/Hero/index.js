import React from 'react';
import './style.css';
import Container from '../Container'

function Hero() {
  return(
    <Container>
      <div id="home">
        <div className="title-container">
          <h5>
            Gerar Suaverdez
          </h5>
          <h1>
            Full Stack
            <br />
            Web Developer
          </h1>
          <ul>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Email</li>
            <li>Resume</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Hero;