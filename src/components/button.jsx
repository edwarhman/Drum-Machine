import React from 'react'
// To verify props types
import PropTypes from 'prop-types'

function Button(props) {
  const { id, className, keyName } = props

  return (
    <button id={id} className={className}>
      {keyName}
    </button>
  )
}

// verify props types
Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  keyName: PropTypes.string,
}

export default Button
