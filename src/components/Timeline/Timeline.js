import React from 'react'
import AddressContext from '../../AddressContext'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'

class Timeline extends React.Component {
  static contextType = AddressContext

  render () {
    const address = this.context.data
    console.log(address)

    return (
      <VerticalTimeline>
        {address.map(a => 
          <VerticalTimelineElement
            contentStyle={{ background: 'darkslategray', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  darkslategray' }}
            key={a.id}
          >
            <h3>{a.year}</h3>
            <p>{a.street_address} {a.unit ? 'Unit:' + a.unit : ''}</p>
            <p>{a.city}, {a.state} {a.zipcode}</p>
            <p>{a.current ? 'Current Address' : ''}</p>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
    )
  }
}

export default Timeline