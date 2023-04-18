import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('App', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      photos: {
        data: [],
        isLoading: false,
        error: null,
      },
      selectedPhoto: {},
    });
  });

  it('renders the app heading', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const headingElement = screen.getByRole('heading', { name: 'Photos' });
    expect(headingElement).toBeInTheDocument();
  });
});
