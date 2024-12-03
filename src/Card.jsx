import React, { useState } from 'react';
import Exit from './Exit';
import './Card.css';
import crossImage from "./assets/cross.png";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark  } from '@fortawesome/free-solid-svg-icons'

function Card({ header, children }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleHeaderClick = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  const handleExitClick = () => {
    setIsHeaderVisible(true);
  };

  return (
    <div className="card-container">
      {isHeaderVisible && (
        <div className="card-header" onClick={handleHeaderClick}>
          {header}
        </div>
      )}
      <div className={`card ${isHeaderVisible ? 'collapsed' : ''}`}>
        {!isHeaderVisible && (
          <div className="card-content">
            <button className = "icon-button"  onClick={handleExitClick}>
              <FontAwesomeIcon icon={faCircleXmark}/>
            </button>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
