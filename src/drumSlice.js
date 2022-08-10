import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lastAudio: '',
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
  },
})

export const { update } = drumSlice.actions
export default drumSlice.reducer
