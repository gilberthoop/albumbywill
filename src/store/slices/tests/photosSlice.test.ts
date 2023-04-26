import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import {
  photosReducer,
  removePhotoById,
  updateFavoritesById,
} from "../photosSlice";
import { PhotosState } from "../../../modules/types";

const mockPhoto = {
  id: "1",
  url: "https://example.com/photo.jpg",
  description: "A beautiful photo",
  filename: "photo.jpg",
  sizeInBytes: 1000000,
  uploadedBy: "John Doe",
  createdAt: "2017-09-21T17:16:34.629Z",
  updatedAt: "2022-09-21T17:16:34.629Z",
  dimensions: { height: 100, width: 200 },
  resolution: { height: 72, width: 72 },
  favorited: false,
  sharedWith: [],
};

describe("photosSlice", () => {
  let store: EnhancedStore<{ photos: PhotosState }>;

  beforeAll(() => {
    store = configureStore({
      reducer: { photos: photosReducer },
    });
  });

  it("should remove a photo by id", () => {
    const initialState: PhotosState = {
      data: [mockPhoto],
      isLoading: false,
      error: null,
    };
    const action = removePhotoById("1");
    const state = photosReducer(initialState, action);
    expect(state.data).toHaveLength(0);
  });

  it("should update a photo favorite status", () => {
    const initialState: PhotosState = {
      data: [mockPhoto],
      isLoading: false,
      error: null,
    };
    const action = updateFavoritesById("1");
    const state = photosReducer(initialState, action);
    expect(state.data[0].favorited).toBe(true);
  });
});
