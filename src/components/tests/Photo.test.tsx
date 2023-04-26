import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Photo from "../Photo";

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
  favorited: true,
  sharedWith: [],
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Photo", () => {
  it("renders the photo correctly", () => {
    const store = mockStore({
      selectedPhoto: null,
    });

    render(
      <Provider store={store}>
        <Photo photo={mockPhoto} narrowCaption={false} />
      </Provider>
    );

    const photoElement = screen.getByAltText(mockPhoto.description);
    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute("src", mockPhoto.url);

    const titleElement = screen.getByText(mockPhoto.filename);
    expect(titleElement).toBeInTheDocument();

    const sizeElement = screen.getByText(
      `${(mockPhoto.sizeInBytes / (1024 * 1024)).toFixed(1)} MB`
    );
    expect(sizeElement).toBeInTheDocument();
  });

  it("dispatches selectPhoto action on click", () => {
    const store = mockStore({
      selectedPhoto: null,
    });

    render(
      <Provider store={store}>
        <Photo photo={mockPhoto} narrowCaption={false} />
      </Provider>
    );

    const photoElement = screen.getByAltText(mockPhoto.description);
    fireEvent.click(photoElement);

    expect(store.getActions()).toEqual([
      { type: "selectedPhoto/selectPhoto", payload: mockPhoto },
    ]);
  });

  it("should call window.scrollTo on click", () => {
    const store = mockStore({
      selectedPhoto: mockPhoto,
    });
    const scrollToSpy = jest.spyOn(window, "scrollTo");
    render(
      <Provider store={store}>
        <Photo photo={mockPhoto} narrowCaption={false} />
      </Provider>
    );

    const photoElement = screen.getByAltText(mockPhoto.description);
    fireEvent.click(photoElement);

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    scrollToSpy.mockRestore();
  });
});
