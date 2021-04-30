import React from 'react'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
  render () {
    return (
      <div>
        Login!
        <Link to='/sign-up'>Sign Up!</Link>
      </div>
    )
  }
}

export default LoginPage