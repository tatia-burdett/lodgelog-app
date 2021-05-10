import React from 'react'
import AddressContext from '../../AddressContext'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import config from '../../config'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


class Timeline extends React.Component {
  static contextType = AddressContext

  state = { error: null }

  handleDelete = e => {
    e.preventDefault()
    const id = e.target.id

    const requestOptions = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    }

    fetch(`${config.API_ENDPOINT}/address/${id}`, requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error('Oops, something went wrong!')
        }
        return res.json()
      })
      .then(() => {
        this.context.handleDelete(id)
      })
      .catch(error => {
        this.setState({ error })
      })
  }

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
          <Link to={`/address/${a.id}`}>Edit Post</Link>
          <button 
          id={a.id}
          onClick={this.handleDelete}>
            Delete
          </button>
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