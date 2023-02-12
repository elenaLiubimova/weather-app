import { configureStore } from '@reduxjs/toolkit';
import placeReducer from './place/slice';

const store = configureStore({
  reducer: {
    place: placeReducer,
  },
})

export default store;