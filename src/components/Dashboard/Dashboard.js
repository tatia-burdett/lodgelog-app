import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import AddressContext from '../../AddressContext'
import FetchApiService from '../../services/fetch-api-service'

import Timeline from '../Timeline/Timeline'

class AddressLog extends React.Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = AddressContext

  componentDidMount() {
    const userId = this.context.userId
    FetchApiService.getAddressForUser(userId)
      .then(console.log('maybe!'))
  }

  render () {
    console.log(this.context.address)
    
    return (
      <div className='dashboard'>
        <header className='dashboard-header'>
          <h1>Address Timeline</h1>
          <h2>Scroll to view, or add a new address</h2>
        </header>
        <div className='dashboard-link'>
          <Link to='/add-address'>Add address</Link>
        </div>
        <div className='dashboard-timeline'>
          <Timeline />
        </div>
      </div>
    )
  }
}

export default AddressLog