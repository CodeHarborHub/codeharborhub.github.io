import React, { useState } from 'react';
import './LinearSearchVisualizer.css';
import Heading from "@theme/Heading";

const LinearSearchVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([5, 3, 8, 2, 9, 1, 7]);
  const [target, setTarget] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [searching, setSearching] = useState<boolean>(false);

  const handleSearch = () => {
    if (target === null) {
      alert('Please enter a target number.');
      return;
    }
    setCurrentIndex(null);
    setFoundIndex(null);
    setSearching(true);
    let found = false;
    let animationDelay = 0;
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        setCurrentIndex(i);
        if (array[i] === target) {
          setFoundIndex(i);
          found = true;
        }
        if (i === array.length - 1 && !found) {
          setSearching(false);
        }
      }, animationDelay);
      animationDelay += 1000; // Adjust animation delay here (in milliseconds)
      if (array[i] === target) break;
    }
  };

  const resetVisualization = () => {
    setTarget(null);
    setCurrentIndex(null);
    setFoundIndex(null);
    setSearching(false);
  };

  const shuffleArray = () => {
    const shuffledArray = [...array].sort(() => Math.random() - 0.5);
    setArray(shuffledArray);
    resetVisualization();
  };

  return (
    <div className="linear-search-container">
      <Heading as="h2">Linear Search Visualization</Heading>
      <div className="array-container">
        {array.map((num, index) => (
          <div
            key={num}
            className={`array-item ${index === currentIndex ? 'current' : ''} ${
              index === foundIndex ? 'found' : ''
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="controls">
        <input
          type="number"
          value={target || ''}
          onChange={(e) => setTarget(Number(e.target.value))}
          placeholder="Enter target number"
          disabled={searching}
        />
        <button onClick={handleSearch} disabled={searching}>
          Search
        </button>
        <button onClick={resetVisualization} disabled={!searching && !target}>
          Reset
        </button>
        <button onClick={shuffleArray} disabled={searching}>
          Shuffle Array
        </button>
      </div>
    </div>
  );
};

export default LinearSearchVisualizer;
