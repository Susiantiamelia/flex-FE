import { createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../utils/Api'

const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async ( thunkAPI) => {
      const response = await Api.get('/films')
      return response.data
    }
  )

export {fetchFilms}