import React from 'react';
import './preloader.css';

const Preloader = () => {
  return (
      <div className="loader-wrapper">
        <div className="timer-loader"/>
        <div>Loading...</div>
      </div>
  );
  // return <div>loading...</div>;
};

export default Preloader;
