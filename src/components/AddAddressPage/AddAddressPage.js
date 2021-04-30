import React from 'react'

class AddAddressPage extends React.Component {
  render () {
    return (
      <div>
        <form>
          <label>Street Address</label>
          <input />
          <label>Unit Number</label>
          <input />
          <label>City</label>
          <input />
          <label>State</label>
          <input />
          <label>Zipcode</label>
          <input />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddAddressPage