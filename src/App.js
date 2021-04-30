import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/LoginPage/LoginPage'
import SignUpPage from './components/SignUpPage/SignUpPage'
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
    </div>
  )
}

  render () {
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