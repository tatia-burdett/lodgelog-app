import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'

import data from './mockdata'

import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/LoginPage/LoginPage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import AddAddressPage from './components/AddAddressPage/AddAddressPage'
import Footer from './components/Footer/Footer'

class App extends React.Component {

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
    console.log(data)

    return (
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>
          {this.renderRoutes()}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App;