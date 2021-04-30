import React from 'react'
import AddressContext from '../../AddressContext'
import './Timeline.css'

class Timeline extends React.Component {
  static contextType = AddressContext

  render () {
    const address = this.context.data
    console.log(address)

    return (
      <div className='timeline'>

      </div>
    )
  }
}

export default Timeline