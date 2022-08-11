import React from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../drumSlice'
import { useRef, useEffect } from 'react'
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
  const buttonRef = useRef(null)
  const audioRef = useRef(null)
  const dispatch = useDispatch()
  const { className, keyName, trackName, trackFile, keyPressed } = props
  const formated = trackName.replace('.mp3', '')

  useEffect(() => {
    console.log('se usa el efecto')
    if (keyPressed === keyName) {
      buttonRef.current.click()
    }
  })

  return (
    <button
      id={formated}
      style={outerstyle}
      className={className}
      onClick={() => {
        dispatch(update(formated.replaceAll('-', ' ')))
        audioRef.current.play()
      }}
      ref={buttonRef}
    >
      <div style={innerStyle}>{keyName}</div>
      <audio
        src={trackFile}
        className="clip"
        id={keyName}
        ref={audioRef}
      ></audio>
    </button>
  )
}

// verify props types
Button.propTypes = {
  className: PropTypes.string,
  keyName: PropTypes.string,
  trackFile: PropTypes.string,
  trackName: PropTypes.string,
  keyPressed: PropTypes.string,
}

export default Button
