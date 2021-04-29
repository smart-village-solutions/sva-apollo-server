import { gql } from 'apollo-server-core';

export const keywordsGQL = gql`
  extend type Query {
    oParlKeywordList: [String!]
  }
`;
