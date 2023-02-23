import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  place: '',
}

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setPlace(state, action) {
      state.place = action.payload;
    }
  },
});

export const { setPlace } = placeSlice.actions;

export default placeSlice.reducer;