import React from 'react'
import AddressContext from '../../AddressContext'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'
import Moment from 'react-moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


class Timeline extends React.Component {
  static contextType = AddressContext

  render () {
    let address = this.context.address || []
    address.sort((a,b) => (a.from_date < b.from_date ? 1 : -1))
    let renderAddress
    if (address) {
      renderAddress = address.map(a => {
        return (
          <VerticalTimelineElement
          contentStyle={{ background: 'darkgray', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  darkgray' }}
          key={a.id}
          iconStyle={{ background: 'darkgray', color: '#000' }}
          icon={<FontAwesomeIcon icon={faHome} className='house-icon'/>}
        >
          <h3>
            <Moment format="D MMM YYYY" withTitle>{a.from_date}</Moment>
            {' '}-{' '}
            <Moment format="D MMM YYYY" withTitle>{a.to_date || new Date()}</Moment>
          </h3>
          <p>{a.street_address} {a.unit ? 'Unit:' + a.unit : ''}</p>
          <p>{a.city}, {a.state} {a.zipcode}</p>
          <p>{a.current ? 'Current Address' : ''}</p>
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