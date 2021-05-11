import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import AddressContext from '../../AddressContext'
import config from '../../config'
import TokenService from '../../services/token-service'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import Timeline from '../Timeline/Timeline'

class AddressLog extends React.Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = AddressContext

  fetchUserAddresses = () => {
    const userId = this.context.currentUser
    fetch(`${config.API_ENDPOINT}/address/user/${userId}`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(data => this.context.setAddress(data))
      })
  }

  componentDidMount() {
    this.fetchUserAddresses()
  }

  render () {
    return (
      <div className='dashboard'>
        <header className='dashboard-header'>
          <h1>Address Timeline</h1>
          <h2>Scroll to view, or add a new address</h2>
        </header>
        <div className='dashboard-link'>
          <Link to='/add-address'>
            <FontAwesomeIcon icon={faPlus} className='plus-icon'/> 
            {' '}Add Address
          </Link>
        </div>
        <div className='dashboard-timeline'>
          <Timeline />
        </div>
      </div>
    )
  }
}

export default AddressLog