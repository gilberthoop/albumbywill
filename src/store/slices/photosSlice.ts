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
 */
const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    data: [],
    isLoading: true,
    error: null
  } as PhotosState,
  reducers: {},
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

export const photosReducer = photosSlice.reducer;
