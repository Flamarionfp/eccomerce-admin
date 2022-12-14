import { render, screen } from '@testing-library/react';
import { TechnologiesShowcase } from './TechnologiesShowcase';

describe('Testing the TechnologiesShowcase component', () => {
  it('all images should have alt text', () => {
    render(<TechnologiesShowcase />);

    const logos = screen.getAllByRole('img');
    const hasAltAttribute = logos.every((logo) => logo.hasAttribute('alt'));

    expect(hasAltAttribute).toBeTruthy();
  });
});
