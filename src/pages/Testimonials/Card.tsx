import React from 'react';
import './Card.css'; // Import the Card styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  imageSrc: string;
  contributor: string;
  cont: string;
  cardback: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  contributor,
  cont,
  cardback,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <div className="card-image-container">
          <img src={`https://unavatar.io/twitter/${contributor}?fallback=https://github.com/${contributor}.png`} alt={imageSrc} className="card-image" />
        </div>
        <div className="card-text">{contributor}</div>
        <div className="card-text1">{cont}</div>
        <div className="card-rating">
          {[...Array(5)].map((star, index) => (
            <FontAwesomeIcon icon={faStar} key={index} />
          ))}
        </div>
        <div className="card-date">24 May 2024</div>
      </div>
      <div className="card-back">
        <div className="card-back-content">{cardback}</div>
      </div>
    </div>
  </div>
);

export default Card;
