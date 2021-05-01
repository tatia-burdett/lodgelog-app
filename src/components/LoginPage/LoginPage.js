import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

class LoginPage extends React.Component {
  render () {
    return (
      <div className='login-page'>
        <header className='login-page-header'>
          <h1>Sign in</h1>
          <h2>Click the 'sign up' button to create an account</h2>
        </header>
        <section className='login-page-section'>
          <form className='login-page-form'>
            <label htmlFor='username'>Username</label>
            <input 
              type='text'
              id='username'
              name='username'
              placeholder='username'
              required
            />

            <label htmlFor='password'>Password</label>
            <input 
              type='text'
              id='password'
              name='password'
              placeholder='password'
              required
            />

            <button type='submit' className='submit-button'>
              Login
            </button>
          </form>
          <Link to='/sign-up'>Sign Up!</Link>
        </section>
      </div>
    )
  }
}

export default LoginPage