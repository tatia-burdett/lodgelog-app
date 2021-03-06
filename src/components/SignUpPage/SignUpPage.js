import React from 'react'
import './SignUpPage.css'

import SignUpForm from '../SignUpForm/SignUpForm'

class SignUpPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  handleSignUpSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render () {
    return (
      <div className='signup-page'>
        <header className='signup-page-header'>
          <h1>Sign Up</h1>
          <h2>Create a username and password. Once submitted, you will be redirected to the login page.</h2>
        </header>
        <section className='signup-page-section'>
          <SignUpForm 
            onSignUpSuccess={this.handleSignUpSuccess}
          />
        </section>
      </div>
    )
  }
}

export default SignUpPage