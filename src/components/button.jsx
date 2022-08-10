import React from 'react'
// To verify props types
import PropTypes from 'prop-types'

const styles = {
  height: '0',
  paddingBottom: '100%',
  position: 'relative',
}

function Button(props) {
  const { id, className, keyName } = props

  return (
    <button id={id} style={styles} className={className}>
      <div
        style={{
          position: 'absolute',
          margin: 'auto 0',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {keyName}
      </div>
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
