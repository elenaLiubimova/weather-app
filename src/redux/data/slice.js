import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: null,
  error: null,
}

export const getCurrentData = createAsyncThunk(
  'data/getCurrentData',
  async () => {
    // const { lat, lon } = params;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=55.745&lon=37.6183&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
      // "https://63a8083e7989ad3286f8f72f.mockapi.io/cards"
    ); //${lat} ${lon}

    const data = await res.json();
    return data;
    // dispatch(setData(res.data));
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    }
  },

  extraReducers: {
    [getCurrentData.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getCurrentData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    },
    [getCurrentData.rejected]: (state, action) => {},
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;