import React from 'react'

import { Element } from 'react-scroll'

import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VunueNfo from './components/venueNfo'
import Highlight from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'

function App() {
  return (
    <div className="App" style={{
      height: '1500px',
      backgroundColor: 'blue', 
    }}>
      <Element name="event">
        <Header />
      </Element>
      <Featured />
      <Element name="venueNfo">
        <VunueNfo />
      </Element>
      <Element name="highlights">
        <Highlight />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App
