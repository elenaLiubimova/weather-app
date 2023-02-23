import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './data/slice';
import placeReducer from './place/slice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    place: placeReducer,
  }
});

export default store;