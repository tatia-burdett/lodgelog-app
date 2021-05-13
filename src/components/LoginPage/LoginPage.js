import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

import LoginForm from '../LoginForm/LoginForm'

class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  handleLogin = () => {
    const { location, history } = this.props
    const destination = (location.state || '/dashboard')
    history.push(destination)
  }

  render () {
    return (
      <div className='login-page'>
        <header className='login-page-header'>
          <h1>Sign in</h1>
          <h2>Login, or click below to be redirected to create an account</h2>
          <p>To demo, use username <strong>demo</strong>, and password <strong>demopassword</strong></p>
        </header>
        <section className='login-page-section'>
          <LoginForm 
            onLoginSuccess={this.handleLogin}
          />
          <Link to='/sign-up'>New user? Click here!</Link>
        </section>
      </div>
    )
  }
}

export default LoginPage