import { gql } from 'apollo-server-core';

export const roadworkGQL = gql`
  type Roadwork {
    id: ID!
    name: String!
    description: String
  }
`;
