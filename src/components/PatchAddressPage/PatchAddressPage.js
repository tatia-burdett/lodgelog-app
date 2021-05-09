import React from 'react'

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
    // const { id } = this.props.match.params
    // const idInt = parseInt(id)

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