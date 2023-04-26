import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RecentPhotos from '../RecentPhotos';

const mockStore = configureStore([]);

describe('RecentPhotos', () => {
  test('renders recent photos', () => {
    const recentPhotos = [
      { id: 1, title: 'Photo 1', imageUrl: 'https://example.com/photo1.jpg', filename: 'sun' },
      { id: 2, title: 'Photo 2', imageUrl: 'https://example.com/photo2.jpg', filename: 'moon' }
    ];
    const store = mockStore({
      photos: { data: recentPhotos }
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <RecentPhotos />
      </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const photoGrid = getByTestId('photo-grid');
    // eslint-disable-next-line testing-library/no-node-access
    expect(photoGrid.children.length).toBe(2);
  })
})