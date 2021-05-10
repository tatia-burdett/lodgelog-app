import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PatchAddressPage from './PatchAddressPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <PatchAddressPage />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div)
});