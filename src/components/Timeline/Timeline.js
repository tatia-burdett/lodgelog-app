import React from 'react'
import AddressContext from '../../AddressContext'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


class Timeline extends React.Component {
  static contextType = AddressContext

  render () {
    const address = this.context.address

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
          <h3>{a.from_date} {a.to_date ? '-' + a.to_date : '- Present'}</h3>
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