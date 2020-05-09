import React from 'react'
import Navbar from '../components/Navbar'
import Leadertable from '../components/Leadertable'

import Particles from 'react-particles-js';

export default function leaderboard() {
  return (
    <div>
      <Particles

        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 900,
              }

            },
            color: {
              value: ['#cc0000']
            },
            line_linked: {
              color: '#aa0044',
              opacity: 1
            }
          },
        }}
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          position: "fixed",
          index: "-10"


        }}
      />
      <Navbar />
      <div className="head">
        <div className="container neon-box">
          <div class="glitch2" data-text="LEADERBOARD">LEADERBOARD</div>
        </div>
      </div>

      <Leadertable />
    </div>
  )
}
