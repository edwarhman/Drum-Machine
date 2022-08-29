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
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

function Button(props) {
  const buttonRef = useRef(null)
  const audioRef = useRef(null)
  const dispatch = useDispatch()
  const { className, keyName, trackName, trackFile, keyPressed, keyCount } =
    props
  const formated = trackName.replace('.mp3', '')

  useEffect(() => {
    if (keyPressed === keyName) {
      buttonRef.current.click()
    }
  }, [keyCount])

  return (
    <div style={outerstyle}>
      <button
        id={formated}
        style={innerStyle}
        className={className}
        onClick={() => {
          dispatch(update(formated.replaceAll('-', ' ')))
          audioRef.current.load()
          audioRef.current.play()
        }}
        ref={buttonRef}
      >
        {keyName}
        <audio
          src={trackFile}
          className="clip"
          id={keyName}
          ref={audioRef}
        ></audio>
      </button>
    </div>
  )
}

// verify props types
Button.propTypes = {
  className: PropTypes.string,
  keyName: PropTypes.string,
  trackFile: PropTypes.string,
  trackName: PropTypes.string,
  keyPressed: PropTypes.string,
  keyCount: PropTypes.number,
}

export default Button
