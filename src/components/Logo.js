import React from 'react';
import './css/Logo.css'; // Import the CSS file for logo styles

const Logo = ({ title, imageSrc }) => {
  return (
    <div className="logo-container">
      <div className="logo-title">
        <img src={imageSrc} alt="Logo" className="logo-image" />
        <h1 className="logo-title">{title}<span className='inc'>inc.</span></h1>
      </div>
    </div>
  );
};

export default Logo;