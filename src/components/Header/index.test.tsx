import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    render(
      <Header/>,
    );
    expect(screen.getByTestId('header')).toContainHTML(
      '<div class="root">blah</div>',
    );
  });
});
