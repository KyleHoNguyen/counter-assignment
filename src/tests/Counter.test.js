// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';
beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByText(/counter/i);
  expect(count).toBeInTheDocument('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  const count = screen.getByTestId('count');

  fireEvent.click(incrementButton);  // Simulate click event on the "+" button

  expect(count).toHaveTextContent('1');  // After clicking "+", expect count to be '1'
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const count = screen.getByTestId('count');

  fireEvent.click(decrementButton);  // Simulate click event on the "-" button

  expect(count).toHaveTextContent('-1');  // After clicking "-", expect count to be '-1'
});
