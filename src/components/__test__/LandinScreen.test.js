import { render, screen } from '@testing-library/react';
import LandingScreen from '../LandingScreen';

test('renders learn react link', () => {
  render(<LandingScreen />);
  const linkElement = screen.getByText(/Welcome to/i);
  expect(linkElement).toBeInTheDocument();
});
