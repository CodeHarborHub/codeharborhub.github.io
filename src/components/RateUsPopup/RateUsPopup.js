// src/components/RateUsPopup/RateUsPopup.js
import React, { useState } from 'react';
import clsx from 'clsx';
import style from './RateUsPopup.module.css';
import { motion } from 'framer-motion';

function RateUsPopup({ onClose }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ rating, feedback });
    onClose();
  };

  return (
    <div className={clsx(style.popupOverlay)}>
      <motion.div
        className={clsx(style.popup)}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <button className={clsx(style.closeButton)} onClick={onClose}>
          &times;
        </button>
        <h2>Rate Us</h2>
        <form onSubmit={handleSubmit}>
          <div className={clsx(style.starRating)}>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={clsx(index < rating ? style.filled : style.empty)}
                onClick={() => setRating(index + 1)}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Leave your feedback here..."
            required
          />
          <button type="submit" className={clsx(style.submitButton)}>
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default RateUsPopup;
