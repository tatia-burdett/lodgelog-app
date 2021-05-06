import config from '../config'
import TokenService from './token-service'
import IdleService from './idle-service'

const AuthApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        (!res.ok) 
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },

  postLogin({ username, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login` {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })  
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        IdleService.registerIdleTimerResets()
        TokenService.
      })
  }
}

export default AuthApiService