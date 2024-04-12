import React, { useState } from 'react';

function ChangeEventExample() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}

export default ChangeEventExample;