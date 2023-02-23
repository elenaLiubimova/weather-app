<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './data/slice';
import placeReducer from './place/slice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    place: placeReducer,
  }
});
=======
import { configureStore } from '@reduxjs/toolkit';
import placeReducer from './place/slice';

const store = configureStore({
  reducer: {
    place: placeReducer,
  },
})
>>>>>>> 86b6c6efcaa426d51334170fcd0c87bedf31325c

export default store;