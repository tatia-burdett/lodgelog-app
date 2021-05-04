import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import AddressContext from './AddressContext'
import config from './config'

import data from './mockdata'

import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/LoginPage/LoginPage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import AddAddressPage from './components/AddAddressPage/AddAddressPage'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      address: [],
      error: null
    }
  }

  componentDidMount() {
    this.fetchAllData()
  }

  fetchAllData = () => {
    Promise.all([
      this.fetchAddress
    ])
      .then(([address]) => {
        this.setState({
          address
        })
      })
      .catch(error => {
        this.setState({error})
      })
  }

  fetchAddress = () => {
    return fetch(`${config.API_ENDPOINT}/address`)
      .then(res => res.json())
  }

  renderRoutes () {
    return (
      <div>
        <Route 
          exact
          path='/'
          component={LandingPage}
        />
        <Route 
          path='/dashboard'
          component={Dashboard}
        />
        <Route 
          path='/login'
          component={Login}
        />
        <Route 
          path='/sign-up'
          component={SignUpPage}
        />
        <Route 
          path='/add-address'
          component={AddAddressPage}
        />
      </div>
    )
  }

  render () {
    const value = {
      data: data
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