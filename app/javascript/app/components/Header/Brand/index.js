import React from 'react'

import './brand.scss'

function Brand() {
  return (
    <a className="navbar-brand" href="https://github.com/OneMob/challenge">
      <img
        className="one-mob-logo"
        src="https://s3-us-west-2.amazonaws.com/onevid.production/assets/logo.png"
        alt=""
        width="100"
        height="24"
        className="d-inline-block align-top"
      />
      <span className="heading">Challenge</span>
    </a>
  )
}

export default Brand