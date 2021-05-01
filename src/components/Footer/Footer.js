import React from 'react'
import './Footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer-container'>
        <p>Copyright &#169; 2021</p>
        <p>Created by Tatia Burdett</p>
        <ul>
          <li><a href='https://www.linkedin.com/in/tatjanaburdett/'>LinkedIn</a></li>
          <li><a href='https://github.com/tatia-burdett'>GitHub</a></li>
        </ul>
      </div>
    )
  }
}

export default Footer