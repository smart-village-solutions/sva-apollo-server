import { gql } from 'apollo-server-core';

// TODO: this needs to be refined once the other types are integrated and we can nest the data instead of having link references"
export const bodyGQL = gql`
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
    organization: String
    "TODO: needs to be list of data instead of list of ids/urls"
    person: String
    "TODO: needs to be list of data instead of list of ids/urls"
    meeting: String
    "TODO: needs to be list of data instead of list of ids/urls"
    paper: String
    "TODO: needs to be list of data instead of list of ids/urls"
    legislativeTerm: [String]
    classification: String
    "TODO: needs to be list of data instead of list of ids/urls"
    location: [String!]
  }

  "TODO: either remove the ability to mutate oparl object via graphql or refine it"
  type UpdateBodyResponse {
    body: OParlBody
    success: Boolean
  }

  extend type Query {
    oParlBodies: [OParlBody!]
  }

  extend type Mutation {
    updateBody(externalId: String!, name: String!): UpdateBodyResponse
  }
`;
