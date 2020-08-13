import React from 'react';
import Data from '../../data.json';
import './style.css';

const ImageGrid = () => {
  return(
      <div className="img-grid">
        { Data.map( data => (
          <div className="img-card" key={data.id}>
            <div className="hover-effect">
              <div className="hover-effect-tl-corner"></div>
              <div className="hover-effect-br-corner"></div>
              <div className="hover-effect-accent">
                <a href={data.link} target="_blank" rel="noopener noreferrer"><img className="img-img" alt={data.title} src={process.env.PUBLIC_URL + "/assets/images/" + data.image} /></a>
              </div>
              
            </div>
            <div className="img-action">
              <span className="card-title">{data.title}</span>
              <div className="img-action-links">
                <a href={data.github} target="_blank" rel="noopener noreferrer">Github</a>
                <a href={data.link} target="_blank" rel="noopener noreferrer">Deployed <i class="fas fa-external-link-alt"></i></a>
              </div>
              <div className="tags-container">
                {data.tags.map( tag => (
                  <span className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))
        }
      </div>  
  )
}

export default ImageGrid;