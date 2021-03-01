import React from 'react'
import ReactDOM from 'react-dom'
import View from './View';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <View />,
    document.body.appendChild(document.createElement('div'))
  )
})
