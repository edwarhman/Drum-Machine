import React from 'react'
import './App.css'
import Button from './components/button'
import { importAll } from './utils'
import { useSelector } from 'react-redux'

const BUTTONS_KEYS = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
const audioTracks = importAll(require.context('./audio', false, /\.(mp3)$/))
const tracksNames = Object.keys(audioTracks)

function App() {
  const lastAudio = useSelector((state) => state.drum.lastAudio)
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
        id={audioTracks[idx]}
      ></Button>
    )
  })

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
