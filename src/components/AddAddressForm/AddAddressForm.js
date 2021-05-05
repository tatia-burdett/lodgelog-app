import React from 'react'

class AddAddressForm extends React.Component {
  render() {
    return (
      <form className='add-address-page-form'>
        <label htmlFor='street_addresss'>Street Address</label>
        <input 
          type='text'
          id='street_address'
          name='street_address'
          placeholder='street_address'
          required
        />

        <label htmlFor='unit'>Unit Number</label>
        <input 
          type='text'
          id='unit'
          name='unit'
          placeholder='Unit or Apt #'
        />

        <label htmlFor='city'>City</label>
        <input 
          type='text'
          id='city'
          name='city'
          placeholder='city'
          required
        />

        <label htmlFor='state'>State</label>
        <input 
          type='text'
          id='state'
          name='state'
          placeholder='state'
          required
        />

        <label htmlFor='zipcode'>Zipcode</label>
        <input 
          type='text'
          id='zipcode'
          name='zipcode'
          placeholder='zipcode'
          required
        />

        <label htmlFor='current'>Current Address</label>
        <input 
          type='checkbox'
          id='current'
          name='current'
        />

        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    )
  }
}

export default AddAddressForm