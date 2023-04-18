import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Photo from '../Photo';

const mockPhoto = {
  id: '1',
  url: 'https://example.com/photo.jpg',
  description: 'A beautiful photo',
  filename: 'photo.jpg',
  sizeInBytes: 1000000,
};

const mockStore = configureStore([]);

describe('Photo', () => {
  it('renders the photo correctly', () => {
    const store = mockStore({
      selectedPhoto: null
    });

    render(
      <Provider store={store}>
        <Photo photo={mockPhoto} narrowCaption={false} />
      </Provider>
    );

    const photoElement = screen.getByAltText(mockPhoto.description);
    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute('src', mockPhoto.url);

    const titleElement = screen.getByText(mockPhoto.filename);
    expect(titleElement).toBeInTheDocument();

    const sizeElement = screen.getByText(`${(mockPhoto.sizeInBytes / (1024 * 1024)).toFixed(1)} MB`);
    expect(sizeElement).toBeInTheDocument();
  });

  it('dispatches selectPhoto action on click', () => {
    const store = mockStore({
      selectedPhoto: null
    });

    render(
      <Provider store={store}>
        <Photo photo={mockPhoto} narrowCaption={false} />
      </Provider>
    );

    const photoElement = screen.getByAltText(mockPhoto.description);
    fireEvent.click(photoElement);

    expect(store.getActions()).toEqual([{ type: 'selectedPhoto/selectPhoto', payload: mockPhoto }]);
  });
});