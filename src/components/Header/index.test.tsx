/* eslint-disable max-len */
// src/__test__/integration/networkError.spec.tsx
import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

let documentBody: RenderResult;

describe('<Header />', () => {
  beforeEach(() => {
    documentBody = render(
      <Header
        headerIconLink="https://www.google.co.uk"
        headerText="I am a header"
        navLinkText1="Home"
        navLinkText2="About"
      />,
    );
  });
  it('shows Header with header text and two nav links', () => {
    expect(documentBody.getByText('I am a header')).toBeInTheDocument();
    expect(documentBody.getByText('Home')).toBeInTheDocument();
    expect(documentBody.getByText('About')).toBeInTheDocument();
  });
});
