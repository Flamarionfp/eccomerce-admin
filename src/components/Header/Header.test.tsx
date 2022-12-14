import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Testing the Header component', () => {
  it('should render correctly', () => {
    render(<Header />);

    expect(screen.getByRole('img')).toContainHTML('/images/typescript-logo.png');
  });
});
