import {
  selectPhoto,
  removePhoto,
  markAsFavorite,
  selectedPhotoReducer,
} from "../selectedPhotoSlice";
import { PhotoData } from "../../../modules/types";

describe("selectedPhotoSlice", () => {
  const initialState = {} as PhotoData;
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

  it("should handle selectPhoto", () => {
    const action = selectPhoto(mockPhoto);
    const newState = selectedPhotoReducer(initialState, action);

    expect(newState).toEqual(mockPhoto);
  });

  it("should handle removePhoto", () => {
    const action = removePhoto();
    const newState = selectedPhotoReducer(initialState, action);

    expect(newState).toEqual({});
  });

  it("should handle markAsFavorite", () => {
    const action = markAsFavorite();
    const newState = selectedPhotoReducer(mockPhoto, action);

    expect(newState.favorited).toBeTruthy();
  });
});
