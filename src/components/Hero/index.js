import React from 'react';
import './style.css';

function Hero() {
  return(
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
          <li><a href="https://github.com/gerarjon" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/gerar-suaverdez-002351177/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="mailto: gerarsuaverdez@gmail.com"><i class="fas fa-envelope-square"></i></a></li>
          <li><a href="https://www.instagram.com/gerar_jon/" target="_blank" rel="noopener noreferrer">Art</a></li>
          <li><a href="assets/documents/GSuaverdez_Resume.pdf" target="_blank">Resumé</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Hero;