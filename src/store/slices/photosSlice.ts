import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPhotos } from '../thunks/fetchPhotos';

interface PhotosState {
  data: any[];
  isLoading: boolean;
  error: any | null;
}

/**
 * Watch for action types made by the 'thunk',
 * in which case is the fetching of photos data.
 * Define a removePhotoById reducer to remove a photo.
 * Define a updateFavorites reducer to update the favorites in the photos state.
 */
const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    data: [],
    isLoading: true,
    error: null
  } as PhotosState,
  reducers: {
    removePhotoById(state, action) {
      state.data = state.data.filter(photo => photo.id !== action.payload)
    },
    updateFavorites(state, action) {
      const { id, favorited } = action.payload;
      state.data = state.data.map(photo =>
        photo.id === id ? { ...photo, favorited } : photo
      );
    }
  },
  extraReducers(builder) {
    // Update state object indicating the process of data loading.
    builder.addCase(fetchPhotos.pending, (state) => {
      state.isLoading = true;
    });
    // Indicate the successful photos data fetching.
    builder.addCase(fetchPhotos.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Indicate the failed photos data fetching.
    builder.addCase(fetchPhotos.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const { removePhotoById, updateFavorites } = photosSlice.actions;
export const photosReducer = photosSlice.reducer;
