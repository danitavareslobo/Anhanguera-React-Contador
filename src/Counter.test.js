import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders Counter component with initial value 0', () => {
    render(<Counter />);
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });

  test('increments the counter when increment button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
  });

  test('decrements the counter when decrement button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment')); 
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });
});


