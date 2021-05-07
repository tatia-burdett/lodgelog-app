import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import AddressContext from '../../AddressContext'
import config from '../../config'

class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  static contextType = AddressContext

  state = { error: null }

  componentDidMount() {
    this.fetchAllData()
  }

  fetchAllData = () => {
    Promise.all([
      this.fetchUsers()
    ])
      .then(this.context.setUser)
      .catch(this.context.setError)
  }

  fetchUsers = () => {
    return fetch(`${config.API_ENDPOINT}/user`)
      .then(res => res.json())
  }

  matchUser = (username) => {
    const user = this.context.user[0]
    console.log(username)
    const findUser = user.filter(u => u.username === username)
    return this.context.setCurrentUser(findUser[0].id)
  }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { username, password } = e.target
    this.matchUser(username.value)


    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
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