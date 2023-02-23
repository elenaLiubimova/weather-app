<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  place: '',
}
=======
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  place: '',
};

export const getGeo = createAsyncThunk(
  'place/getGeo',
  async (place, {rejectWithValue, dispatch}) => {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=7aa038d5396a5019e711ebe072511387&units=metric&lang=ru`
    );
    dispatch(setPlace(response.geo));
  }
);
>>>>>>> 86b6c6efcaa426d51334170fcd0c87bedf31325c

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setPlace(state, action) {
      state.place = action.payload;
<<<<<<< HEAD
    }
  },
});

export const { setPlace } = placeSlice.actions;

=======
    },
  },

  extraReducers: {
    [getGeo.fulfilled]: () => console.log('fullfilled'),
    [getGeo.pending]: () => console.log('pending'),
    [getGeo.rejected]: () => console.log('rejected'),
  }
});

export const { setPlace } = placeSlice.actions;
>>>>>>> 86b6c6efcaa426d51334170fcd0c87bedf31325c
export default placeSlice.reducer;