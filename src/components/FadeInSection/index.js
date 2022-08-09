import React, {useEffect, useRef, useState} from 'react';
import './style.css';

const FadeinSection = ({children}) => {
  const domRef = useRef();
  const [isVisisble, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);

    return () => observer.disconnect();
  })

  return (
    <div ref={domRef} className={`fadeIn ${isVisisble ? 'is-visible' : ''}`}>
      {children}
    </div>
  )
}

export default FadeinSection;