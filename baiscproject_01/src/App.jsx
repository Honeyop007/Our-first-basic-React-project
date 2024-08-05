import React, { useState } from 'react';
import Btn from './comp/Btn';
function App() {
  const [bgColor, setBgColor] = useState('olive');

  return (
    <div>
   
    <div className='h-screen w-full justify-center text-centre'  style={{ backgroundColor: bgColor }}>
      <div
        className='flex text-gray-400 m-2 fixed inset-x-0 px-2 justify-between bg-slate-50 rounded-lg bottom-12 flex-wrap'
        style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }}
      >
        <Btn onClick={() => setBgColor('red')}  name='Red' color='red' />
        <Btn onClick={() => setBgColor('yellow')}  name='Yellow' color='yellow' />
        <Btn onClick={() => setBgColor('blue')} name='Blue' color='blue' />
        <Btn onClick={() => setBgColor('black')} name='Black' color='black' />
        <Btn onClick={() => setBgColor('white')} name='White' color='white'  />
        <Btn onClick={() => setBgColor('grey')} name='Grey' color='grey' />
        <Btn onClick={() => setBgColor('pink')} name='Pink' color='pink' />
        <Btn onClick={() => setBgColor('purple')} name='Purple' color='purple' />
        <Btn onClick={() => setBgColor('green')} name='Green' color='green' />
        <Btn onClick={() => setBgColor('olive')} name='Olive' color='olive' />
      </div>
    </div>
    </div>
  );
}

export default App;
