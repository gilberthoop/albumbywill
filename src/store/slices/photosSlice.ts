import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPhotos } from "../thunks/fetchPhotos";
import { PhotosState } from "../../modules/types";
import {
  RemovePhotoById,
  UpdateFavoritesById,
} from "../../modules/actionsTypes";

/**
 * Watch for action types made by the 'thunk',
 * in which case is the fetching of photos data.
 * Define a removePhotoById reducer to remove a photo.
 * Define a updateFavorites reducer to update the favorites in the photos state.
 */
const photosSlice = createSlice({
  name: "photos",
  initialState: {
    data: [],
    isLoading: true,
    error: null,
  } as PhotosState,
  reducers: {
    removePhotoById(state: PhotosState, action: RemovePhotoById) {
      state.data = state.data.filter((photo) => photo.id !== action.payload);
    },
    updateFavoritesById(state: PhotosState, action: UpdateFavoritesById) {
      state.data = state.data.map((photo) => {
        if (photo.id === action.payload) {
          return { ...photo, favorited: !photo.favorited };
        }
        return photo;
      });
    },
  },
  extraReducers(builder) {
    // Update state object indicating the process of data loading.
    builder.addCase(fetchPhotos.pending, (state) => {
      state.isLoading = true;
    });
    // Indicate the successful photos data fetching.
    builder.addCase(
      fetchPhotos.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    // Indicate the failed photos data fetching.
    builder.addCase(
      fetchPhotos.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { removePhotoById, updateFavoritesById } = photosSlice.actions;
export const photosReducer = photosSlice.reducer;
