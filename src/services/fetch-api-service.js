import config from '../config'
import TokenService from '../services/token-service'

const FetchApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/user`, {
      headers: {
      }
    }) 
    .then(res => {
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      })
  },

  getUser(userId) {
    return fetch(`${config.API_ENDPOINT}/user/${userId}`, {
      headers: {

      }
    })
    .then(res => {
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  },

  getAddressForUser(userId) {
    return fetch(`${config.API_ENDPOINT}/address/${userId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  }
}

export default FetchApiService