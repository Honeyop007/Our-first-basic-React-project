import React from 'react';
import Btn from './component/button';
import './App.css';

function App() {
  // const [bgColor, setBgColor] = useState('white');

  const handleColorChange = (color) => {
    // bgColor = color
    document.body.style.backgroundColor = color ;
  }

  return (
    <div className='flex  text-gray-400 m-2 relative bg-slate-50 rounded-lg top-[250px]'
         style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }}
    >
      <Btn name='Red' color='red' onClick={handleColorChange} />
      <Btn name='Yellow' color='yellow' onClick={handleColorChange} />
      <Btn name='Blue' color='blue' onClick={handleColorChange} />
      <Btn name='White' color='white' onClick={handleColorChange} />
      <Btn name='Black' color='black' onClick={handleColorChange} />
      <Btn name='Grey' color='grey' onClick={handleColorChange} />
      <Btn name='Pink' color='pink' onClick={handleColorChange} />
      <Btn name='Purple' color='purple' onClick={handleColorChange} />
      <Btn name='Green' color='green' onClick={handleColorChange} />
      <Btn name='Olive' color='olive' onClick={handleColorChange} />
    </div>
  );
}

export default App;
