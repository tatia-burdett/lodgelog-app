import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddAddressPage from './AddAddressPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <AddAddressPage />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div)
});