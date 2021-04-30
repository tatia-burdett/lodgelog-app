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
        {address.map(a => 
          <section className='timeline-address' key={a.id}>
            <div className='timeline-content'>
              <h2>{a.year}</h2>
              <p>{a.street_address} Apt/Unit: {a.unit || ''}</p>
              <p>{a.city}, {a.state} {a.zipcode}</p>
              <p>{a.current ? 'Current Address' : ''}</p>
            </div>
          </section>  
        )}
      </div>
    )
  }
}

export default Timeline