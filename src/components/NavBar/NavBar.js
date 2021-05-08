import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'

class NavBar extends React.Component {
  handleLogout = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  renderLogoutLink = () => {
    return (
      <Link to='' onClick={this.handleLogout}>
        Logout
      </Link>
    )
  }

  renderLoginLink = () => {
    return (
      <Link to='/login'>
        Login
      </Link>
    )
  }

  render () {
    return (
      <div className='navbar'>
        <h1><Link to='/' className='nav-header'>LodgeLog</Link></h1>
        <ul className='nav-links'>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar