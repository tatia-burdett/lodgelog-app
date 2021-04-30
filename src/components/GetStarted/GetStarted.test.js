import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import GetStarted from './GetStarted'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <GetStarted />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div)
});