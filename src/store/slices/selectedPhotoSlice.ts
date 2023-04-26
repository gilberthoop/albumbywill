import { createSlice } from "@reduxjs/toolkit";
import { PhotoData } from "../../modules/types";
import { SelectPhoto } from "../../modules/actionsTypes";

/**
 * Create a slice for the currently selected photo named 'selectedPhotoSlice'.
 * Set the initial state of the slice to an empty object.
 * Define a selectPhoto reducer to update the state.
 * Define an markAsFavorite reducer to add the photo to favorites
 * Define a removePhoto reducer.
 */
const selectedPhotoSlice = createSlice({
  name: "selectedPhoto",
  initialState: {} as PhotoData,
  reducers: {
    selectPhoto(state: PhotoData, action: SelectPhoto) {
      return action.payload;
    },
    markAsFavorite(state: PhotoData) {
      return { ...state, favorited: !state.favorited };
    },
    removePhoto() {
      return {} as PhotoData;
    },
  },
});

export const { selectPhoto, markAsFavorite, removePhoto } =
  selectedPhotoSlice.actions;
export const selectedPhotoReducer = selectedPhotoSlice.reducer;
