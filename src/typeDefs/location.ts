import { gql } from 'apollo-server-core';

export const locationGQL = gql`
  type Location {
    lat: String
    lon: String
  }
`;
