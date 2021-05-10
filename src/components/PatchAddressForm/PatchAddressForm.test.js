import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PatchAddressForm from './PatchAddressForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <PatchAddressForm />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div)
});