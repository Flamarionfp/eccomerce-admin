import { render, screen } from '@testing-library/react';
import { Main } from './Main';

describe('Testing the main component', () => {
  it('should have a typescript logo', () => {
    render(<Main />);

    expect(screen.getByRole('img')).toContainHTML('/images/typescript-logo.png');
  });
});
