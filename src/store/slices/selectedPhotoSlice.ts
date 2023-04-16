import { createSlice } from '@reduxjs/toolkit';

/**
 * Create a slice for the currently selected photo named 'selectedPhotoSlice'.
 * Set the initial state of the slice to an empty object.
 * Define a selectPhoto reducer to update the state.
 * Define a resetSelectedPhoto to reset the state.
 */
const selectedPhotoSlice = createSlice({
  name: 'selectedPhoto',
  initialState: {},
  reducers: {
    selectPhoto(state, action) {
      Object.assign(state, action.payload);
    },
    resetSelectedPhoto() {
      return {};
    }
  }
})

export const { selectPhoto, resetSelectedPhoto } = selectedPhotoSlice.actions;
export const selectedPhotoReducer = selectedPhotoSlice.reducer;