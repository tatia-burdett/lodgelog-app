import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

class LoginPage extends React.Component {
  render () {
    return (
      <div>
        <form>
          <label>Username</label>
          <input />
          <label>Password</label>
          <input />
          <button>
            Login
          </button>
        </form>
        <Link to='/sign-up'>Sign Up!</Link>
      </div>
    )
  }
}

export default LoginPage