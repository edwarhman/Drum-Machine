import React from 'react'
// To verify props types
import PropTypes from 'prop-types'

// set button square
const outerstyle = {
  height: '0',
  paddingBottom: '100%',
  position: 'relative',
}

// center button content
const innerStyle = {
  position: 'absolute',
  margin: 'auto 0',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

function Button(props) {
  const { className, keyName, trackName, trackFile } = props
  const track = new Audio(trackFile)

  return (
    <button
      id={trackName.replace('.mp3', '')}
      style={outerstyle}
      className={className}
      onClick={() => {
        track.play()
      }}
    >
      <div style={innerStyle}>{keyName}</div>
      <audio src={trackFile} className="clip" id="keyName"></audio>
    </button>
  )
}

// verify props types
Button.propTypes = {
  className: PropTypes.string,
  keyName: PropTypes.string,
  trackFile: PropTypes.string,
  trackName: PropTypes.string,
}

export default Button
