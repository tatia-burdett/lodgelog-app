import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

import LoginForm from '../LoginForm/LoginForm'

class LoginPage extends React.Component {
  render () {
    return (
      <div className='login-page'>
        <header className='login-page-header'>
          <h1>Sign in</h1>
          <h2>Click the 'sign up' button to create an account</h2>
        </header>
        <section className='login-page-section'>
          <LoginForm />
          <Link to='/sign-up'>Sign Up!</Link>
        </section>
      </div>
    )
  }
}

export default LoginPage