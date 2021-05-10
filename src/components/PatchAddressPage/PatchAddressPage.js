import React from 'react'
import './PatchAddressPage.css'

import PatchAddressForm from '../PatchAddressForm/PatchAddressForm'

class PatchAddressPage extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    },
    match: {
      params: {}
    }
  }

  render () {
    return (
      <div className='add-address-page'>
        <header className='add-address-page-header'>
          <h1>Update Address Fields</h1>
        </header>
        <section className='add-address-page-section'>
          <PatchAddressForm {...this.props}/>
        </section>
      </div>
    )
  }
}

export default PatchAddressPage