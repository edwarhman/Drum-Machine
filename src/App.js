import React from 'react'
import './App.css'
import Button from './components/button'

const BUTTONS_KEYS = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']

function App() {
  return (
    <div className="App" id="drum-machine">
      <div className="display-container">
        <h2>Display:</h2>
        <input readOnly id="display"></input>
      </div>
      <div className="buttons-container">
        {BUTTONS_KEYS.map((key) => (
          <Button keyName={key} key={key}></Button>
        ))}
      </div>
    </div>
  )
}

export default App
