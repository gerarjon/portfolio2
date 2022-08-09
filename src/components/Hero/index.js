import React from 'react';
import './style.css';
import Type from '../Type';

function Hero() {

  return(
    <section id="home" className='valign-wrapper'>
      <div className="title-container">
        <h5>
          Gerar Suaverdez
        </h5>
        <h1>
          <span className='title-list'><Type /></span>
          Developer
        </h1>
        <ul className='icons'>
          <li><a className='icon icon--github' href="https://github.com/gerarjon" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a className='icon icon--linkedin' href="https://www.linkedin.com/in/gerar-suaverdez-002351177/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a className='icon icon--email' href="mailto: gerarsuaverdez@gmail.com"><i className="fas fa-envelope-square"></i></a></li>
          <li><a className='icon icon--instagram' href="https://www.instagram.com/gerar_jon/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a className='icon icon--resume' href="assets/documents/GSuaverdez_Resume.pdf" target="_blank"><i className="fas fa-file"></i></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Hero;