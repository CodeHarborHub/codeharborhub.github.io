import React, { useState, useEffect } from 'react';
import './ArrayVisualization.css'; 

const ArrayVisualizations: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [delay, setDelay] = useState<number>(300); 
  const [minIndex, setMinIndex] = useState<number | null>(null); 
  const [isDisabled, setIsDisabled] = useState<boolean>(false); 
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  useEffect(() => {
    generateArray();    
  }, []);

  useEffect(() => {
    updateMoveDuration();
  }, [delay]);

  const generateArray = () => {
    const newArray = Array.from({ length: 18 }, () => Math.ceil(Math.random() * 90) + 10);
    setArray(newArray);
  };

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
          ></div>
        ))}
      </div>      
    </div>
  );
};

export default ArrayVisualizations;