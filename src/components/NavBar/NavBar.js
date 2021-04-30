import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <h1><Link to='/' className='nav-header'>LodgeLog</Link></h1>
        <ul className='nav-links'>
          <li>
            <Link to=''>Dashboard</Link>
          </li>
          <li>
            <Link to=''>Login</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar