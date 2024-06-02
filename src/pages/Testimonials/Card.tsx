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

/**
 * Card component displays a testimonial card with user information and a rating.
 * @param {CardProps} props - The props for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card: React.FC<CardProps> = ({
  imageSrc,
  contributor,
  cont,
  cardback,
  onMouseEnter,
  onMouseLeave,
}) => {
  const starArray = [1, 2, 3, 4, 5];

  return (
    <div className="card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-image-container">
            <img
              src={`https://unavatar.io/twitter/${contributor}?fallback=https://github.com/${contributor}.png`}
              alt={imageSrc}
              className="card-image"
            />
          </div>
          <div className="card-text">{contributor}</div>
          <div className="card-text1">{cont}</div>
          <div className="card-rating">
            {starArray.map((star) => (
              <FontAwesomeIcon icon={faStar} key={star} />
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
};

export default Card;
