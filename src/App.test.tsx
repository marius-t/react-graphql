import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';

import { GET_REPOS } from './gueries/getRepos';
import { App } from './App';

const mocks = [
  {
    request: {
      query: GET_REPOS,
      variables: {
        id: [
          'MDEwOlJlcG9zaXRvcnkzNzQ4OTUyNQ==',
          'MDEwOlJlcG9zaXRvcnkxNTA2Mjg2OQ==',
        ],
      },
    },
    result: {
      data: {
        nodes: [
          {
            forkCount: 1971,
            id: 'MDEwOlJlcG9zaXRvcnkzNzQ4OTUyNQ==',
            name: 'pytest',
            stargazerCount: 8464,
            url: 'https://github.com/pytest-dev/pytest',
          },
          {
            forkCount: 5680,
            id: 'MDEwOlJlcG9zaXRvcnkxNTA2Mjg2OQ==',
            name: 'jest',
            stargazerCount: 38164,
            url: 'https://github.com/facebook/jest',
          },
        ],
      },
    },
  },
];

test('renders main page', () => {
  render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>,
  );
  const linkElement = screen.getByText(/Search for github repos/i);
  expect(linkElement).toBeInTheDocument();
});
