import React from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../drumSlice'
// To verify props types
import PropTypes from 'prop-types'

// styles css

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
  const dispatch = useDispatch()
  const { className, keyName, trackName, trackFile } = props
  const track = new Audio(trackFile)
  const formated = trackName.replace('.mp3', '')

  return (
    <button
      id={formated}
      style={outerstyle}
      className={className}
      onClick={() => {
        dispatch(update(formated.replaceAll('-', ' ')))
        track.play()
      }}
    >
      <div style={innerStyle}>{keyName}</div>
      <audio src={trackFile} className="clip" id={keyName}></audio>
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
