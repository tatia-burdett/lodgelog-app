import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddAddressForm from './AddAddressForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <AddAddressForm />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div)
});