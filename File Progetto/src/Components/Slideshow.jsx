import React, { useState, useEffect } from 'react';
import images from '../Js/images';

const SlideShow = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  let background = images[currentIndex];
  
  return (
    <div className="slideshow-container">
    
      <div style={{
        backgroundImage: "url(/React-icon.svg.png)",
        backgroundSize: '20rem',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 400,
        width: '500rem',
      


        }}>
          
        </div>
{/*
      {isPlaying && (
        <button onClick={togglePlay}>Pause</button>
      )}
      {!isPlaying && (
        <button onClick={togglePlay}>Play</button>
      )}*/}
    </div>
  );
};

export default SlideShow;