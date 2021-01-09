import { render, screen } from '@testing-library/react';
import App from 'App';

describe('App.js', () => {
  it('should be able to show the h1 element', () => {
    render(<App />);
    const titleEl = screen.getByText(/hello, testing world/i);
    // Hello, testing world

    expect(titleEl).toBeInTheDocument();
  });
});
