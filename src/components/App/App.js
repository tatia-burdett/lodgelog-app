import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import AddressContext from '../../AddressContext'
import IdleService from '../../services/idle-service'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

import PrivateRoute from '../Utils/PrivateRoute'
import PublicRoute from '../Utils/PublicRoute'
import NavBar from '../NavBar/NavBar'
import LandingPage from '../LandingPage/LandingPage'
import Dashboard from '../Dashboard/Dashboard'
import PatchAddressPage from '../PatchAddressPage/PatchAddressPage'
import Login from '../LoginPage/LoginPage'
import SignUpPage from '../SignUpPage/SignUpPage'
import AddAddressPage from '../AddAddressPage/AddAddressPage'
import Footer from '../Footer/Footer'

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      address: [],
      error: null
    }
  }

  setError = error => {
    console.log(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setAddress = address => {
    this.setState({ address })
  }

  clearAddress = () => {
    this.setState({ address: [] })
  }

  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle)
    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    TokenService.clearUserId()
    this.forceUpdate()
  }

  renderRoutes () {
    return (
      <div>
        <Route 
          exact
          path='/'
          component={LandingPage}
        />
        <PrivateRoute 
          path='/dashboard'
          component={Dashboard}
        />
        <PrivateRoute 
          path='/address/:id'
          component={PatchAddressPage}
        />
        <PublicRoute 
          path='/login'
          component={Login}
        />
        <PublicRoute 
          path='/sign-up'
          component={SignUpPage}
        />
        <PrivateRoute 
          path='/add-address'
          component={AddAddressPage}
        />
      </div>
    )
  }

  render () {
    const value = {
      address: this.state.address,
      setAddress: this.setAddress,
      clearAddress: this.clearAddress,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
    }

    return (
      <AddressContext.Provider value={value}>
        <div className='app-container'>
          <div className='app-full-screen'>
            <nav>
              <NavBar />
            </nav>
            <main>
              {this.renderRoutes()}
            </main>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </AddressContext.Provider>
    )
  }
}

export default App;