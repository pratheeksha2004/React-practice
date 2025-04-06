import React from 'react';
// Import necessary functions from RTL and user-event
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import user-event
// Import the component to test
import Counter from './component/Counter';

// Optional: Import jest-dom matchers for convenience
// Usually set up globally in setupTests.js with CRA
// import '@testing-library/jest-dom';

describe('Counter Component', () => {
  test('renders initial count of 0', () => {
    // 1. Render the component
    render(<Counter />);

    // 2. Find elements using screen queries (case-insensitive regex recommended)
    const countElement = screen.getByText(/current count: 0/i);
    const headingElement = screen.getByRole('heading', { name: /counter/i });

    // 3. Assert elements are present using Jest's expect and jest-dom matchers
    expect(headingElement).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
  });

  test('increments count when increment button is clicked', async () => {
    // Setup userEvent for more realistic interactions
    const user = userEvent.setup();
    render(<Counter />);

    // Find the increment button
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    // Simulate a user click
    await user.click(incrementButton);

    // Assert the count updated in the DOM
    const countElement = screen.getByText(/current count: 1/i);
    expect(countElement).toBeInTheDocument();

    // Click again
    await user.click(incrementButton);
    expect(screen.getByText(/current count: 2/i)).toBeInTheDocument();
  });

  test('decrements count when decrement button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    // Increment first to enable decrementing
    await user.click(incrementButton); // Count is now 1
    expect(screen.getByText(/current count: 1/i)).toBeInTheDocument();


    // Decrement
    await user.click(decrementButton);
    expect(screen.getByText(/current count: 0/i)).toBeInTheDocument();
  });

   test('decrement button is disabled when count is 0', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    // Assert the button is initially disabled
    expect(decrementButton).toBeDisabled();
  });

   test('decrement button becomes enabled after incrementing', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    expect(decrementButton).toBeDisabled(); // Initially disabled

    await user.click(incrementButton); // Increment count to 1

    expect(decrementButton).toBeEnabled(); // Should now be enabled
  });
});