import React from 'react'
import './SignUpPage.css'

import SignUpForm from '../SignUpForm/SignUpForm'

class SignUpPage extends React.Component {
  render () {
    return (
      <div className='signup-page'>
        <header className='signup-page-header'>
          <h1>Sign Up</h1>
        </header>
        <section className='signup-page-section'>
          <SignUpForm />
        </section>
      </div>
    )
  }
}

export default SignUpPage