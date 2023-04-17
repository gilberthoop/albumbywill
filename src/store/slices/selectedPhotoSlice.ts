import { createSlice } from '@reduxjs/toolkit';

/**
 * Create a slice for the currently selected photo named 'selectedPhotoSlice'.
 * Set the initial state of the slice to an empty object.
 * Define a selectPhoto reducer to update the state.
 * Define an markAsFavorite reducer to add the photo to favorites
 * Define a removePhoto reducer.
 */
const selectedPhotoSlice = createSlice({
  name: 'selectedPhoto',
  initialState: {},
  reducers: {
    selectPhoto(state, action) {
      return action.payload;
    },
    removePhoto() {
      return {};
    },
    markAsFavorite(state, action) {
      return { ...state, favorited: action.payload };
    }
  }
});

export const { selectPhoto, removePhoto, markAsFavorite } = selectedPhotoSlice.actions;
export const selectedPhotoReducer = selectedPhotoSlice.reducer;