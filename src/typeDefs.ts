import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Location {
    lat: String
    lon: String
  }
  "Eine Baustelle"
  type ConstructionSite {
    "Art der Baustelle"
    category: String
    "Grund der Baustelle"
    cause: String
    "Beschreibung der Baustelle"
    description: String
    "Richtung der Baustelle"
    direction: String
    "(Voraussichtliches) Ende der Baustelle"
    endDate: String
    "URL einer zugöhrigen Bilddatei"
    imageUri: String
    "Geo-Koordinaten der Baustellen"
    location: Location
    "Zusätzliche Angabe zum Baustellen-Ort"
    locationDescription: String
    "Einschränkungen durch die Baustelle"
    restrictions: [String]
    "Start-Datum der Baustelle"
    startDate: String!
    "Name/Bezeichner der Baustelle"
    title: String!
  }

  type Roadwork {
    id: ID!
    name: String!
    description: String
  }

  type Query {
    constructionSites: [ConstructionSite!]!
    roadworks: [Roadwork!]!
  }

  type Mutation {
    createConstructionSite(
      category: String
      cause: String
      description: String
      direction: String
      endDate: String
      imageUri: String
      lat: String
      lon: String
      locationDescription: String
      restrictions: [String]
      startDate: String!
      title: String!
    ): ConstructionSite!

    createRoadwork(name: String!, description: String): Roadwork!
  }
`;
