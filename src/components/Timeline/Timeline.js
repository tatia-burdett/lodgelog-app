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
    const address = this.context.data

    let renderAddress
    if (address) {
      renderAddress = address.map(a => {
        return (
          <VerticalTimelineElement
          contentStyle={{ background: 'darkslategray', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  darkslategray' }}
          key={a.id}
          iconStyle={{ background: 'darkslategray', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faHome} className='house-icon'/>}
        >
          <h3>{a.year}</h3>
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