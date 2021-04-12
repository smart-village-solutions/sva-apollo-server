import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

// TODO: this needs to be refined once the other types are integrated and we can nest the data instead of having link references"
export const bodyGQL = gql`
  extend type Query {
    oParlBodies: [OParlBody!]
  }

  extend type Mutation {
    updateBody(externalId: String!, name: String!): UpdateBodyResponse
  }

  type OParlBody {
    name: String!
    website: String
    licenseValidSince: Date
    oparlSince: Date
    ags: String
    rgs: String
    equivalent: [String!]
    contactEmail: String
    contactName: String
    organization: [OParlOrganization!]
    person: [OParlPerson]
    meeting: [OParlMeeting!]
    paper: [OParlPaper!]
    legislativeTerm: [OParlLegislativeTerm!]
    legislativeTermList: [OParlLegislativeTerm!]
    agendaItem: [OParlAgendaItem!]
    consultation: [OParlConsultation!]
    file: [OParlFile!]
    membership: [OParlMembership!]
    classification: String
    location: OParlLocation
    locationList: [OParlLocation!]
    ${oParlBase}
  }

  "TODO: either remove the ability to mutate oparl object via graphql or refine it"
  type UpdateBodyResponse {
    body: OParlBody
    success: Boolean
  }
`;
