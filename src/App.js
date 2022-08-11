import React from 'react'
import './App.css'
import Button from './components/button'
import { importAll } from './utils'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateKeyPressed } from './drumSlice'

const BUTTONS_KEYS = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
const audioTracks = importAll(require.context('./audio', false, /\.(mp3)$/))
const tracksNames = Object.keys(audioTracks)

function App() {
  // store variables
  const dispatch = useDispatch()
  const lastAudio = useSelector((state) => state.drum.lastAudio)
  const keyPressed = useSelector((state) => state.drum.keyPressed)

  // add keydown event listener
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      dispatch(updateKeyPressed(e.key.toUpperCase()))
    })
  }, [])

  // create tracks buttons
  const buttons = BUTTONS_KEYS.map((key, idx) => {
    const trackName = tracksNames[idx]
    const trackFile = audioTracks[trackName]
    return (
      <Button
        trackFile={trackFile}
        trackName={trackName}
        key={key}
        keyName={key}
        className="drum-pad"
        keyPressed={keyPressed}
      ></Button>
    )
  })

  // render component
  return (
    <div className="App" id="drum-machine">
      <div className="display-container">
        <h2>Display:</h2>
        <input readOnly id="display" value={lastAudio}></input>
      </div>
      <div className="buttons-container">{buttons}</div>
    </div>
  )
}

export default App
