import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

import Timeline from '../Timeline/Timeline'

class AddressLog extends React.Component {
  render () {
    return (
      <div>
        <header>
          <h1>Address Timeline</h1>
        </header>
        <div>
          <Link to='/add-address'>Add address</Link>
        </div>
        <div>
          <Timeline />
        </div>
      </div>
    )
  }
}

export default AddressLog