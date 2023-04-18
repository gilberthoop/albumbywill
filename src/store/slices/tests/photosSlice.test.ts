import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { photosReducer, removePhotoById, updateFavorites } from '../photosSlice';
import { PhotosState } from '../../../modules/types';

describe('photosSlice', () => {
  let store: EnhancedStore<{ photos: PhotosState }>;

  beforeAll(() => {
    store = configureStore({
      reducer: { photos: photosReducer },
    });
  });

  it('should remove a photo by id', () => {
    const initialState: PhotosState = {
      data: [{ id: 1, url: 'https://example.com/image1.png', favorited: false }],
      isLoading: false,
      error: null,
    };
    const action = removePhotoById(1);
    const state = photosReducer(initialState, action);
    expect(state.data).toHaveLength(0);
  });

  it('should update a photo favorite status', () => {
    const initialState: PhotosState = {
      data: [{ id: 1, url: 'https://example.com/image1.png', favorited: false }],
      isLoading: false,
      error: null,
    };
    const action = updateFavorites({ id: 1, favorited: true });
    const state = photosReducer(initialState, action);
    expect(state.data[0].favorited).toBe(true);
  });
});
