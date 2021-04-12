import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

// TODO: this needs to be refined once the other types are integrated and we can nest the data instead of having link references"
export const bodyGQL = gql`
  extend type Query {
    oParlBodies(externalIds: [String!]): [OParlBody!]
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
    organization(offset: Int, pageSize: Int): [OParlOrganization!]
    person(offset: Int, pageSize: Int): [OParlPerson]
    meeting(offset: Int, pageSize: Int): [OParlMeeting!]
    paper(offset: Int, pageSize: Int): [OParlPaper!]
    legislativeTerm(offset: Int, pageSize: Int): [OParlLegislativeTerm!]
    legislativeTermList(offset: Int, pageSize: Int): [OParlLegislativeTerm!]
    agendaItem(offset: Int, pageSize: Int): [OParlAgendaItem!]
    consultation(offset: Int, pageSize: Int): [OParlConsultation!]
    file(offset: Int, pageSize: Int): [OParlFile!]
    membership(offset: Int, pageSize: Int): [OParlMembership!]
    classification: String
    location: OParlLocation
    locationList(offset: Int, pageSize: Int): [OParlLocation!]
    ${oParlBase}
  }
`;
