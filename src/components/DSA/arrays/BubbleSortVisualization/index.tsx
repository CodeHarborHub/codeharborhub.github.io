import React, { useState, useEffect } from 'react';
import './BubbleSortVisualization.css'; 

const BubbleSortVisualization: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [delay, setDelay] = useState<number>(200); 
  const [isSorting, setIsSorting] = useState<boolean>(false); 
  const [comparingIndices, setComparingIndices] = useState<number[]>([]);

  useEffect(() => {
    generateArray();    
  }, []);

  useEffect(() => {
    updateMoveDuration();
  }, [delay]);

  const generateArray = () => {
    const newArray = Array.from({ length: 50 }, () => Math.ceil(Math.random() * 100));
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

  const bubbleSort = async () => {
    setIsSorting(true);
    let tempArray = [...array];
    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = 0; j < tempArray.length - i - 1; j++) {
        setComparingIndices([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, delay));
        if (tempArray[j] > tempArray[j + 1]) {
          let temp = tempArray[j];
          tempArray[j] = tempArray[j + 1];
          tempArray[j + 1] = temp;
          setArray([...tempArray]);
        }
      }
    }
    setComparingIndices([]);
    setIsSorting(false);
  };

  return (
    <div className='bubble-sort-visualization'>
      <p>Speed: <input type="range" min="10" max="200" value={delay} onChange={e => setDelay(Number(e.target.value))} /></p>
      <button onClick={bubbleSort} disabled={isSorting}>Sort</button>
      &nbsp;
      <button onClick={generateArray} disabled={isSorting}>Generate New Array</button>
      <br /><br />
      <p>
        <strong>Instructions:</strong> Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.
      </p>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`array-bar ${comparingIndices.includes(index) ? 'comparing' : ''}`}
            style={{ height: `${value * 3}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BubbleSortVisualization;
