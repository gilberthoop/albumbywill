import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import FavoritePhotos from '../FavoritePhotos';

const mockStore = configureStore([]);

describe('FavoritePhotos', () => {
  test('renders favorite photos', () => {
    const favoritePhotos = [
      { id: 1, title: 'Photo 1', imageUrl: 'https://example.com/photo1.jpg', favorited: true },
      { id: 2, title: 'Photo 2', imageUrl: 'https://example.com/photo2.jpg', favorited: true }
    ];
    const store = mockStore({
      photos: { data: favoritePhotos }
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <FavoritePhotos />
      </Provider>
    );

    const photoGrid = getByTestId('photo-grid');
    expect(photoGrid.children.length).toBe(2);
  });
});