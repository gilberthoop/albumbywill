import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { photosReducer } from './slices/photosSlice';
import { selectedPhotoReducer, selectPhoto, resetSelectedPhoto } from './slices/selectedPhotoSlice';
import { fetchPhotos } from './thunks/fetchPhotos';

/**
 * Configure the Redux store with the photosReducer and selectedPhotoReducer
 * and apply the thunkMiddleware
 */
export const store = configureStore({
  reducer: {
    photos: photosReducer,
    selectedPhoto: selectedPhotoReducer
  },
  middleware: [thunkMiddleware],
});

/**
 * Define the RootState type, which represents the type of the entire state of the Redux store
 * Define the AppDispatch type, which represents the type of the dispatch function for the Redux store
 * Export the fetchPhotos, selectPhoto, and resetSelectedPhoto functions
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { fetchPhotos, selectPhoto, resetSelectedPhoto };