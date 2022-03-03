import { gql } from '@apollo/client';

export const SEARCH_REPO = gql`
  query searchRepo($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 5) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            forkCount
            stargazerCount
            name
            url
            id
          }
        }
      }
    }
  }
`;
