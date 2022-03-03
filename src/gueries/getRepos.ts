import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query getRepos($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Repository {
        forkCount
        stargazerCount
        name
        url
        id
      }
    }
  }
`;
