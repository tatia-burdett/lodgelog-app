import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'

class App extends React.Component {

renderRoutes () {
  return (
    <div>

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

        </main>
      </div>
    )
  }
}

export default App;