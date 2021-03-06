import React from 'react'
import AddressContext from '../../AddressContext'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faArrowCircleRight, faEdit } from '@fortawesome/free-solid-svg-icons'


class Timeline extends React.Component {
  static contextType = AddressContext

  state = { error: null }

  render () {
    let address = this.context.address || []
    address.sort((a,b) => (a.from_date < b.from_date ? 1 : -1))
    let renderAddress
    if (address) {
      renderAddress = address.map(a => {
        return (
          <VerticalTimelineElement
          contentStyle={{ 
            background: 'rgba( 255, 186, 73, 1 )', 
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            color: '#000' 
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgba( 255, 186, 73, 1 )' }}
          key={a.id}
          iconStyle={{ 
            background: 'rgba( 255, 186, 73, 1 )', 
            color: '#000' 
          }}
          icon={<FontAwesomeIcon icon={faHome} className='house-icon'/>}
        >
          <h3 className='address-header'>
            <Moment format="MMM D YYYY" withTitle>{a.from_date}</Moment>
            {' '}<FontAwesomeIcon icon={faArrowCircleRight} /> {' '}
            <Moment format="MMM D YYYY" withTitle>{a.to_date || new Date()}</Moment>
          </h3>
          <div className='address-content'>
            <p>{a.street_address} {a.unit ? 'Unit: ' + a.unit : ''}</p>
            <p>{a.city}, {a.state} {a.zipcode}</p>
            <Link to={`/address/${a.id}`}>
              <FontAwesomeIcon icon={faEdit} className='edit-icon'/>
              {' '}Edit Address
            </Link>
          </div>
        </VerticalTimelineElement>
        )
      })
    }
    

    return (
      <VerticalTimeline>
        <div>
        {renderAddress}
        </div>
      </VerticalTimeline>
    )
  }
}



export default Timeline