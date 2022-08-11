import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lastAudio: '',
  keyPressed: '',
}

export const drumSlice = createSlice({
  name: 'drum-machine',
  initialState,
  reducers: {
    // update last audio triggered
    // action payload is the audio name
    update: (state, action) => {
      state.lastAudio = action.payload
    },
    updateKeyPressed: (state, action) => {
      state.keyPressed = action.payload
      console.log('pressed key is updated')
    },
  },
})

export const { update, updateKeyPressed } = drumSlice.actions
export default drumSlice.reducer
