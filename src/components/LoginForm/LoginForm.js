import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import AddressContext from '../../AddressContext'
import './LoginForm.css'
import TokenService from '../../services/token-service'

class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  static contextType = AddressContext

  state = { error: null }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { username, password } = e.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        // this.context.setCurrentUser(res.id)
        TokenService.saveUserId(res.id)
        username.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state

    return (
      <form 
        className='login-page-form'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p>{error}</p>} 
        </div>
        
        <label htmlFor='username'>Username</label>
        <input 
          className='form-input'
          type='text'
          id='username'
          name='username'
          placeholder='username'
          required
        />

        <label htmlFor='password'>Password</label>
        <input 
          type='password'
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