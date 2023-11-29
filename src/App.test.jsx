import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, test } from 'vitest';
import App from './App';

describe('App', () => {
  test('Initial render should show 2 movies of pippi when <App/> component get mounted', async () => {
    render(<App />);

    // mocked movies from handlers
    await waitFor(() => {
      expect(screen.getByText(/Pippi in the South Seas/i)).toBeInTheDocument();
      expect(screen.getByText(/Pippi Longstocking/i)).toBeInTheDocument();
    });

    // Get each movie as an array. I added data-testid="movie" to MovieCard.jsx component to be able to get it as an array.
    const movieArray = screen.getAllByTestId('movie');
    expect(movieArray.length).toBe(2);

    // screen.debug();
  });
});
