import React from 'react'
import { Link } from 'react-router-dom'

class GetStarted extends React.Component {
  render () {
    return (
      <div>
        <Link to='/login'>Get Started</Link>
      </div>
    )
  }
}

export default GetStarted