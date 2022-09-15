import { createSlice } from '@reduxjs/toolkit'
import {fetchFilms} from './filmsActions'

const initialState = {
  films: []
}

export const counterSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer