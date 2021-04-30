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
        <section>
          <h3>Keep track of all your previous addresses</h3>
          <div>
            <p>Keeping track of your prior addresses is important when you get a background check. Often times, in these cases, we have to remember up to 7 years of addresses. If you are someone who moves a lot, sometimes these addresses can really pile up.</p>
          </div>
        </section>
      </div>
    )
  }
}

export default LandingPage