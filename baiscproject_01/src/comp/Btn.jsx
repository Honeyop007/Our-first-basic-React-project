import React from 'react';

function Btn({ name, color, onClick }) {
  // Determine text color based on background color
  
  const textColor = color === 'white' || color === 'pink' || color === 'yellow'? 'black' : 'white';
  return (
    <button
      className='rounded-3xl outline-none font-semibold'
      onClick={() => onClick(color)}
      style={{
        backgroundColor: color,
        color: textColor, // Set text color dynamically
        border: 'none',
        padding: '10px 20px',
        margin: '5px',
        cursor: 'pointer',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      {name}
    </button>
  );
}

export default Btn;
