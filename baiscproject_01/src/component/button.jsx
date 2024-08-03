import React from 'react';

function Btn({ name, color, onClick }) {
  return (
    <div>
      <button
        onClick={() => onClick(color)}
        className='border-black m-2 outline-none'
        style={{ backgroundColor: color, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }}
      >
        {name}
      </button>
    </div>
  );
}

export default Btn;
