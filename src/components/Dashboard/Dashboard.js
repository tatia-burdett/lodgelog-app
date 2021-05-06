import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import AddressContext from '../../AddressContext'

import Timeline from '../Timeline/Timeline'

class AddressLog extends React.Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = AddressContext

  componentDidMount() {
    const { id } = this.props.match.params
    console.log(id)
  }

  render () {
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