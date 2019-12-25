import React from 'react'

import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VunueNfo from './components/venueNfo'

function App() {
  return (
    <div className="App" style={{
      height: '1500px',
      backgroundColor: 'blue', 
    }}>
      <Header />
      <Featured />
      <VunueNfo />
    </div>
  );
}

export default App
