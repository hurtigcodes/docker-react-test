import { render, screen } from '@testing-library/react';
import App from './App';

test('site has bye', () => {
  render(<App />);
  const linkElement = screen.getByText(/bye/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders', () => {
  render(<App />);
  const linkElement = screen;
  expect(linkElement);
});

test('renders', () => {
  render(<App />);
  const linkElement = screen;
  expect(linkElement);
});

test('renders', () => {
  render(<App />);
  const linkElement = screen;
  expect(linkElement);
});

