import React, { useState, useEffect } from 'react';
import './ArrayVisualization.css'; 

const ArrayVisualizations: React.FC = () => {
  // State variables
  const [array, setArray] = useState<number[]>([]); // Holds the array of numbers
  const [delay, setDelay] = useState<number>(300); // Controls the delay for visualization
  const [minIndex, setMinIndex] = useState<number | null>(null); // Index of the minimum value in the array
  const [isDisabled, setIsDisabled] = useState<boolean>(false); // Controls button disable state
  const [currentIndex, setCurrentIndex] = useState<number | null>(null); // Current index being evaluated
  const [isSorting, setIsSorting] = useState<boolean>(false); // Indicates if the array is being sorted

  // Generates a new array when the component mounts
  useEffect(() => {
    generateArray();    
  }, []);

  // Updates the transition duration whenever the delay changes
  useEffect(() => {
    updateMoveDuration();
  }, [delay]);

  // Function to generate a new array with random values
  const generateArray = () => {
    const newArray = Array.from({ length: 18 }, () => Math.ceil(Math.random() * 90) + 10);
    setArray(newArray);
  };

  // Function to update the transition duration for CSS animations
  const updateMoveDuration = () => {
    const stylesheets = document.styleSheets;
    for (let i = 0; i < stylesheets.length; i++) {
      const rules = (stylesheets[i] as CSSStyleSheet).cssRules || (stylesheets[i] as CSSStyleSheet).rules;
      for (let j = 0; j < rules.length; j++) {
        if ((rules[j] as CSSStyleRule).selectorText === '.v-move') {
          (rules[j] as CSSStyleRule).style.transitionDuration = `${delay}ms`;
          break;
        }
      }
    }
  };

  // Function to find the lowest value in the array
  const findLowest = async () => {
    setIsDisabled(true);
    setIsSorting(true);
    let minVal = array[0];
    let minIdx = 0;
    for (let j = 1; j < array.length; j++) {
      setCurrentIndex(j);
      if (array[j] < minVal) {
        minVal = array[j];
        minIdx = j;
      }
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    setMinIndex(minIdx);
    setIsSorting(false);
    setIsDisabled(false);
  };

  // Function to reset the array to new random values
  const resetArray = () => {
    generateArray();
    setMinIndex(null);
  };

  return (
    <div className='array-visualizations'>
      <p>Speed: <input type="range" min="50" max="500" value={delay} onChange={e => setDelay(Number(e.target.value))} /></p>
      <button onClick={findLowest} disabled={isDisabled || isSorting}>Find Lowest</button>
      &nbsp;
      <button onClick={resetArray} disabled={isDisabled || isSorting}>New Values</button>
      <p>Lowest value: {minIndex !== null ? array[minIndex] : null}</p>
      <br /> <br />
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${index === minIndex ? 'min-value' : ''} ${index === currentIndex ? 'current-value' : ''}`}
            style={{ height: `${value * 3}px` }}
           />
        ))}
      </div>      
    </div>
  );
};

export default ArrayVisualizations;
