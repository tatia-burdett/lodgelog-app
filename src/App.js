import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'

class App extends React.Component {

renderRoutes () {
  return (
    <div>
      <Route 
        exact
        path='/'
        component={LandingPage}
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
      </div>
    )
  }
}

export default App;