import React from 'react'
import config from '../../config'
import AddressContext from '../../AddressContext'
import './AddAddressForm.css'

class AddAddressForm extends React.Component {
  static contextType = AddressContext

  state = { error: null }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ error: null })
    const { from_date, to_date, street_address, unit, city, abb_state, zipcode, current } = e.target
    const userId = this.context.currentUser

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        from_date: `${from_date.value}`,
        to_date: `${to_date.value}` || null,
        street_address: `${street_address.value}`,
        unit: `${unit.value}`,
        city: `${city.value}`,
        abb_state: `${abb_state.value}`,
        zipcode: `${zipcode.value}`,
        current: `${current.value}`,
        userid: `${userId}`
      })
    }

    fetch(`${config.API_ENDPOINT}/address`, requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error('Ooops, something went wrong!')
        }
        return res.json()
      })
      .then(() => {
        from_date.value = ''
        to_date.value = ''
        street_address.value = ''
        unit.value = ''
        city.value = ''
        abb_state.value = ''
        zipcode.value = ''
        current.value = ''
        this.props.history.push('/dashboard')
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    return (
      <form 
      className='add-address-page-form'
      onSubmit={this.handleSubmit}
      >
        <label htmlFor='from_date'>From</label>
        <input 
          type='text'
          id='from_date'
          name='from_date'
          required
          placeholder='YYYY-MM-DD'
        />

        <label htmlFor='to_date'>To</label>
        <input 
          type='text'
          id='to_date'
          name='to_date'
          defaultValue=''
          placeholder='YYYY-MM-DD'
        />

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

        <label htmlFor='abb_state'>State</label>
        <input 
          type='text'
          id='abb_state'
          name='abb_state'
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
          value={false}
        />

        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    )
  }
}

export default AddAddressForm