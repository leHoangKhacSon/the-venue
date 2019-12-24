import React from 'react'

import Carrousel from './Carrousel'
import TimeUtils from './TimeUtils'

function Featured() {
  return (
    <div style={{ position: 'relative' }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
      </div>
      <TimeUtils />
    </div>
  )
}

export default Featured
