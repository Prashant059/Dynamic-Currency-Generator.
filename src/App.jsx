import React from 'react';
import Currency from "./components/Currency"
import Bg from './assets/bg.jpg'

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle} className="flex items-center justify-center min-h-screen p-4">
      <Currency />
    </div>
  )
}

export default App
