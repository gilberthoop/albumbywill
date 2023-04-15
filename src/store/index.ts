import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { photosReducer } from './slices/photosSlice';
import { fetchPhotos } from './thunks/fetchPhotos';

export const store = configureStore({
  reducer: {
    photos: photosReducer
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { fetchPhotos };