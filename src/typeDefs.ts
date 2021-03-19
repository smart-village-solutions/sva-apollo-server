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

  scalar Date

  "TODO: this needs to be refined once the other types are integrated and we can nest the data instead of having link references"
  type OParlBody {
    id: ID!
    "id from the oparl object = url where the json is located"
    externalId: String!
    "oParl type = url where the type is specified"
    type: String!
    created: Date!
    modified: Date!
    keyword: String!
    web: String
    deleted: Boolean
    name: String!
    website: String
    license: String
    licenseValidSince: Date
    oparlSince: Date
    ags: String
    rgs: String
    equivalent: [String]
    contactEmail: String
    contactName: String
    "TODO: needs to be list of data instead of list of ids/urls"
    organization: [String!]!
    "TODO: needs to be list of data instead of list of ids/urls"
    person: [String!]!
    "TODO: needs to be list of data instead of list of ids/urls"
    meeting: [String!]!
    "TODO: needs to be list of data instead of list of ids/urls"
    paper: [String!]!
    "TODO: needs to be list of data instead of list of ids/urls"
    legislativeTerm: [String!]!
    classification: String
    "TODO: needs to be list of data instead of list of ids/urls"
    location: [String!]!
  }

  type Roadwork {
    id: ID!
    name: String!
    description: String
  }

  "TODO: either remove the ability to mutate oparl object via graphql or refine it"
  type UpdateBodyResponse {
    body: OParlBody
    success: Boolean
  }

  type Cycle {
    value: Boolean
    cycle: Cycle
  }

  type SimpleCycle {
    value: Boolean
    next: Boolean
  }

  type List {
    value: String
    asd: [List]
  }

  type Query {
    constructionSites: [ConstructionSite!]!
    oParlBodies: [OParlBody!]
    roadworks: [Roadwork!]!
    getCycle: Cycle
    getList: List
    cycles: [SimpleCycle]
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
    deleteRoadwork(id: ID!): Roadwork!
    updateRoadwork(id: ID!, name: String, description: String): Roadwork!
    updateBody(externalId: String!, name: String!): UpdateBodyResponse

    createCycle: Cycle!
    createList: List
  }
`;
