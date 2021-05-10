import React from 'react'
import './PatchAddressPage.css'

import PatchAddressForm from '../PatchAddressForm/PatchAddressForm'

class PatchAddressPage extends React.Component {
  render () {
    return (
      <div className='patch-address-page'>
        <header className='patch-address-page-header'>
          <h1>Update Address Fields</h1>
        </header>
        <section className='patch-address-page-section'>
          <PatchAddressForm {...this.props}/>
        </section>
      </div>
    )
  }
}

export default PatchAddressPage