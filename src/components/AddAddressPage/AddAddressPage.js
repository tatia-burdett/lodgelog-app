import React from 'react'
import './AddAddressPage.css'

import AddAddressForm from '../AddAddressForm/AddAddressForm'

class AddAddressPage extends React.Component {
  render () {
    return (
      <div className='add-address-page'>
        <header className='add-address-page-header'>
          <h1>Add an Address</h1>
        </header>
        <section className='add-address-page-section'>
          <AddAddressForm />
        </section>
      </div>
    )
  }
}

export default AddAddressPage