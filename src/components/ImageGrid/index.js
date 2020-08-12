import React from 'react';
import Container from '../Container';
import Data from '../../data.json';
import './style.css';

const ImageGrid = () => {
  return(
    <Container>
      <div className="img-grid">
        { Data.map( data => (
          <div className="img-card" key={data.id}>
            <div className="hover-effect">
              <div className="hover-effect-tl-corner"></div>
              <div className="hover-effect-br-corner"></div>
              <div className="hover-effect-accent">
                <a href={data.link} target="_blank" rel="noopener"><img className="img-img" alt={data.title} src={process.env.PUBLIC_URL + "/assets/images/" + data.image} /></a>
              </div>
              
            </div>
            <div className="img-action">
              <span className="card-title">{data.title}</span>
              <div className="img-action-links">
                <a href={data.github} target="_blank" rel="noopener noreferrer">Github</a>
                <a href={data.link} target="_blank" rel="noopener noreferrer">Deployed <i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
        ))
        }
      </div>  
    </Container>
  )
}

export default ImageGrid;