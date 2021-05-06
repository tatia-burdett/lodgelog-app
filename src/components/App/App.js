import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import AddressContext from '../../AddressContext'

import PrivateRoute from '../Utils/PrivateRoute'
import PublicRoute from '../Utils/PublicRoute'
import NavBar from '../NavBar/NavBar'
import LandingPage from '../LandingPage/LandingPage'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../LoginPage/LoginPage'
import SignUpPage from '../SignUpPage/SignUpPage'
import AddAddressPage from '../AddAddressPage/AddAddressPage'
import Footer from '../Footer/Footer'

class App extends React.Component {

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