import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
  render () {
    return (
      <div className='landing-page'>
        <header className='landing-header'>
          <h1>LodgeLog</h1>
          <h2>Your address history, when you need it!</h2>
          <Link to='/login' className='button-link'>Get Started</Link>
        </header>
        <section className='landing-section'>
          <h3>What is LodgeLog?</h3>
          <div className='section-content-container'>
            <p>LodgeLog is an address timeline for your own personal address history. It allows you to keep track of everywhere you have lived in an easily viewable way.</p>
            <p>Have you ever applied for a job where they required your last 7 years of addresses? This can be a tough one to manage, especially if you have moved around a lot. According to Forbes, "The United States Census Bureau found that, between 2007 and 2012, Millennials accounted for about 24 percent of the total population of the U.S., but they made up over 43 percent of all movers." With younger generations traveling more often, and remote work becoming more commonplace, keeping record of previous homes can be both necessary and an enjoyable way to reminisce.</p>
            <p>LodgeLog allows you to post new addresses to your address timeline, and scroll through it chronologically. Click the "get started" button above, or the login link in the upper right hard corner to start logging your lodges!</p>
  
          </div>
        </section>
      </div>
    )
  }
}

export default LandingPage