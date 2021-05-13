import config from '../config'
import jwtDecode from 'jwt-decode'

let _timeoutId
const _TEN_SECONDS_IN_MS = 10000

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  saveUserId(userId) {
    window.localStorage.setItem('userId', userId)
  },
  getUserId() {
    return window.localStorage.getItem('userId')
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(username, password) {
    return window.btoa(`${username}:${password}`)
  },
  parseJwt(jwt) {
    return jwtDecode(jwt)
  },
  readJwtToken() {
    return TokenService.parseJwt(TokenService.getAuthToken())
  },
  _getMsUntilExpiry(payload) {
    return (payload.exp * 1000) - Date.now()
  },
  queueCallbackBeforeExpiry(callback) {
    const msUntilExpiry = TokenService._getMsUntilExpiry(
      TokenService.readJwtToken()
    )
    _timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS)
  },
  clearCallbackBeforeExpiry() {
    clearTimeout(_timeoutId)
  }
}

export default TokenService