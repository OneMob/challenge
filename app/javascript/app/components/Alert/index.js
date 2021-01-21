import React from 'react'
import './alert.scss'

const Alert = ({show, variant, dismissible, children}) => (
  show ? (
    <div 
      className={`alert alert-${variant}`} 
      role="alert"
    >
      {children}
    </div>
  ): null
)

export default Alert
