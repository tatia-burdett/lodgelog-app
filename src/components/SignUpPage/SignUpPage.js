import React from 'react'
import './SignUpPage.css'

class SignUpPage extends React.Component {
  render () {
    return (
      <div>
        <form>
          <label>Name</label>
          <input />
          <label>Username</label>
          <input />
          <label>Password</label>
          <input />
          <label>Re-enter Password</label>
          <input />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUpPage