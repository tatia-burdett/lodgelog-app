import config from '../config'

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
    return fetch(`${config.API_ENDPOINT}/user/${userId}/address`, {
      headers: {

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