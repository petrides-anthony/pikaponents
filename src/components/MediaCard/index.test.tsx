/* eslint-disable max-len */
// src/__test__/integration/networkError.spec.tsx
import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediaCard from './MediaCard';

let documentBody: RenderResult;

describe('<MediaCard />', () => {
  beforeEach(() => {
    documentBody = render(
      <MediaCard
        title="title"
      // eslint-disable-next-line max-len
        image="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
        imageAltText="alt text"
        buttonLabel="click for more..."
        buttonLink="https://www.google.co.uk"
      >
        Card body text via children
      </MediaCard>,
    );
  });
  it('shows mediacard with title, alt-text and body text from children', () => {
    expect(documentBody.getByText('title')).toBeInTheDocument();
    expect(documentBody.getByText('Card body text via children')).toBeInTheDocument();
    expect(documentBody.getByAltText('alt text')).toBeInTheDocument();
  });
});
