import React from 'react'
import AuthApiService from '../../services/auth-api-service'

class SignUpForm extends React.Component {
  static defaultProps = {
    onSignUpSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = e.target

    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value,
      password: password.value
    })
    .then(user => {
      username.value = ''
      password.value = ''
      this.props.onSignUpSuccess()
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  render() {
    const { error } = this.state
    return (
      <form 
        className='signup-page-form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>

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
          Sign Up
        </button>
      </form>
    )
  }
}

export default SignUpForm