import React, { useState } from 'react';

function SubmitEventExample() {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with value: ' + value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} style={{ marginRight: '10px' }} />
      <button type="submit" style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
    </form>
  );
}

export default SubmitEventExample;