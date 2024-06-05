import React from 'react';
import '../styles/SpinningCircle.css';
import JonasImage from '../assets/JonasBackground.png';

const SpinningCircle = () => {
  return (
    <div className="container">
      <div className="static-image">
        <img src={JonasImage} alt="Static" className="image" />
      </div>
      <div className="circle-container">
        <svg className="spinning-circle" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" />
        </svg>
      </div>
    </div>
  );
};

export default SpinningCircle;
