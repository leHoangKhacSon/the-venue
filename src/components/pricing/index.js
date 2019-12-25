import React from 'react'

import Zoom from 'react-reveal/Zoom'

import MyButton from '../utils/MyButton'

const datas = [
  {
    price: 100,
    position: 'Balcony',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
    linkTo: 'http://sales/a',
    delay: 500,
  },
  {
    price: 150,
    position: 'Medium',
    desc: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    linkTo: 'http://sales/b',
    delay: 0,
  },
  {
    price: 250,
    position: 'Start',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    linkTo: 'http://sales/c',
    delay: 500,
  }
]

function Pricing() {
  const showBoxes = datas => (
    datas.map((data, index) => (
      <Zoom 
        key={index}
        delay={data.delay}
      >
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${data.price}</span>
              <span>{data.position}</span>
            </div>
            <div className="pricing_description">
              {data.desc}
            </div>
            <div className="pricing_buttons">
              <MyButton 
                text="Purchase"
                bck="#fa8000"
                color="white"
                link={data.linkTo}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">
          {showBoxes(datas)}
        </div>
      </div>
    </div>
  )
}

export default Pricing
