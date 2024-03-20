import React, { Fragment } from 'react'

function ErrorBlock(title, message) {
  return (
    <Fragment>
      <h3>{title}</h3>
      <p>{message}</p>
    </Fragment>
  )
}

export default ErrorBlock