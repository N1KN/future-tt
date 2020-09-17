import React from 'react';
import './error-indicator.css';
import icon from './error-icon.svg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} className="error-indicator-icon" alt="error icon" />
            <span className="boom">Oops!</span>
            <span>Something has gone terribly wrong</span>
            <span>(but we already told the coders to fix it)</span>
        </div>
    );
};

export default ErrorIndicator;
