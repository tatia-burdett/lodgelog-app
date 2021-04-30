import React from 'react'
import './LandingPage.css'

import GetStarted from '../GetStarted/GetStarted'

class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <header>
          <h1>LodgeLog</h1>
          <h2>Your address history, when you need it!</h2>
          <GetStarted />
        </header>
      </div>
    )
  }
}

export default LandingPage