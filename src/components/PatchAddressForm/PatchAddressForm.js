import React from 'react'
import config from '../../config'
import AddressContext from '../../AddressContext'
import './PatchAddressForm.css'

class PatchAddressForm extends React.Component {
  static contextType = AddressContext

  state = { error: null }

  handleSubmit = e => {
    const { id } = this.props.match.params
    e.preventDefault()
    this.setState({ error: null })
    const { to_date } = e.target


    const requestOptions = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        to_date: `${to_date.value}` || null,
      })
    }

    fetch(`${config.API_ENDPOINT}/address/${id}`, requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error('Oops, something went wrong!')
        }
        return res.json()
      })
      .then(() => {
        to_date.value = ''
        this.props.history.goBack()
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    return (
      <form
        className='patch-address-page-form'
        onSubmit={this.handleSubmit}
      >

        <label htmlFor='to_date'>Change To Date</label>
        <input 
          type='text'
          id='to_date'
          name='to_date'
        />

        <button type='submit' className='submit-button'>
          Update Address
        </button>
      </form>
    )
  }
}

export default PatchAddressForm