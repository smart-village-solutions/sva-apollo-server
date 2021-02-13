import { gql } from "apollo-server-core";

export const typeDefs = gql`

  type Roadwork {
    id: ID!
    name: String!
    description: String
  }

  type Query {
    roadworks: [Roadwork!]!
  }

  type Mutation {
    createRoadwork(
      name: String!
      description: String
    ): Roadwork!
  }
`;