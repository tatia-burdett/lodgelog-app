import React from 'react'

class LoginForm extends React.Component {

  render() {
    return (
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
    )
  }
}

export default LoginForm