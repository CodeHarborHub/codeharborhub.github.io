import React, { useState, useEffect } from 'react';
import './style.css'; 

const InsertionSortVisualization: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [delay, setDelay] = useState<number>(300); 
  const [minIndex, setMinIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  useEffect(() => {
    generateArray();    
  }, []);

  useEffect(() => {
    updateMoveDuration();
  }, [delay]);

  const generateArray = () => {
    const newArray = Array.from({ length: 40 }, () => Math.ceil(Math.random() * 90) + 10);
    setArray(newArray);
  };

  const updateMoveDuration = () => {
    const stylesheets = document.styleSheets;
    for (const stylesheet of stylesheets) {
      const rules = (stylesheet as CSSStyleSheet).cssRules;
      for (const rule of rules) {
        if ((rule as CSSStyleRule).selectorText === '.v-move') {
          (rule as CSSStyleRule).style.transitionDuration = `${delay}ms`;
          break;
        }
      }
    }
  };

  const insertionSort = async () => {
    setIsSorting(true);
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      setCurrentIndex(i);
      while (j >= 0 && array[j] > key) {
        await delayFunction(delay);
        array[j + 1] = array[j];
        setArray([...array]);
        j = j - 1;
      }
      array[j + 1] = key;
      setArray([...array]);
      setMinIndex(j + 1);
    }
    setIsSorting(false);
  };

  const resetArray = () => {
    generateArray();
    setMinIndex(null);
    setCurrentIndex(null);
  };

  const delayFunction = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  return (
    <div className='insertion-sort-visualization'>
      <p>Speed: <input type="range" min="50" max="500" value={delay} onChange={e => setDelay(Number(e.target.value))} /></p>
      <button onClick={insertionSort} disabled={isSorting}>Sort</button>
      &nbsp;
      <button onClick={resetArray} disabled={isSorting}>Reset</button>
      <br /> <br />
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${index === currentIndex ? 'current-index' : index === minIndex ? 'min-index' : ''}`}
            style={{ height: `${value * 3}px`, transitionDelay: `${delay / 2}ms` }}
          ></div>
        ))}
      </div>      
    </div>
  );
};

export default InsertionSortVisualization;
