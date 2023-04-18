import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HeartIcon from '../HeartIcon';

describe('HeartIcon component', () => {
  const mockStore = configureStore([]);
  const initialState = {
    selectedPhoto: { id: 1, favorited: false },
  };
  const store = mockStore(initialState);

  it('renders properly with the correct initial state', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <HeartIcon />
      </Provider>
    );

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('heart-icon');
  });

  it('handles the click event and dispatches the correct actions', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <HeartIcon />
      </Provider>
    );

    fireEvent.click(getByRole('button'));

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual({ type: 'selectedPhoto/markAsFavorite', payload: true });
    expect(actions[1]).toEqual({
      type: 'photos/updateFavorites',
      payload: { id: 1, favorited: true },
    });
  });
});