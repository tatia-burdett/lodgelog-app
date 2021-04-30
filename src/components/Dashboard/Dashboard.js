import React from 'react'
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
          <button>Add Address</button>
        </div>
        <div>
          <Timeline />
        </div>
      </div>
    )
  }
}

export default AddressLog