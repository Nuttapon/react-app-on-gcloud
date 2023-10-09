import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer text', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText(/Powered by Nutty/i);
    expect(footerText).toBeInTheDocument();
  });
});