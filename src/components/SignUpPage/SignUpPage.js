import React from 'react'
import './SignUpPage.css'

class SignUpPage extends React.Component {
  render () {
    return (
      <div className='signup-page'>
        <header className='signup-page-header'>
          <h1>Sign Up</h1>
        </header>
        <section className='signup-page-section'>
          <form className='signup-page-form'>
            <label htmlFor='name'>Name</label>
            <input 
              type='text'
              id='name'
              name='name'
              placeholder='name'
              required
            />

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

            <label htmlFor='repassword'>Re-enter Password</label>
            <input 
              type='text'
              id='repassword'
              name='repassword'
              placeholder='repeat password'
              required
            />

            <button type='submit' className='submit-button'>
              Submit
            </button>
          </form>
        </section>
      </div>
    )
  }
}

export default SignUpPage