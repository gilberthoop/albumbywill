import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { PhotoData } from "../../modules/types";
import PhotoDetails from "../PhotoDetails";

const mockStore = configureStore([]);

describe("PhotoDetails", () => {
  let store: any;
  let photo: PhotoData;
  let removePhotoByIdSpy: jest.Mock;

  beforeEach(() => {
    photo = {
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
      favorited: true,
      sharedWith: [],
    };

    removePhotoByIdSpy = jest.fn();

    store = mockStore({
      photos: {
        data: [photo],
        isLoading: false,
        error: null,
      },
      selectedPhoto: {},
    });
  });

  it("should render photo details correctly", () => {
    render(
      <Provider store={store}>
        <PhotoDetails photo={photo} />
      </Provider>
    );

    expect(screen.getByText(photo.uploadedBy)).toBeInTheDocument();
    expect(screen.getByText("September 21, 2017")).toBeInTheDocument();
    expect(screen.getByText("September 21, 2022")).toBeInTheDocument();
    expect(screen.getByText("100 x 200")).toBeInTheDocument();
    expect(screen.getByText("72 x 72")).toBeInTheDocument();
    expect(screen.getByText(photo.description)).toBeInTheDocument();
  });

  it("should dispatch actions for deleting the photo from both the list and sidebar", () => {
    const store = mockStore({
      photos: {
        data: [photo],
        isLoading: false,
        error: null,
      },
      selectedPhoto: {},
    });

    render(
      <Provider store={store}>
        <PhotoDetails photo={photo} />
      </Provider>
    );

    const removeButton = screen.getByRole("button", { name: /Delete/i });
    fireEvent.click(removeButton);

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual({
      type: "photos/removePhotoById",
      payload: photo.id,
    });
    expect(actions[1]).toEqual({
      type: "selectedPhoto/removePhoto",
      payload: undefined,
    });
  });
});
