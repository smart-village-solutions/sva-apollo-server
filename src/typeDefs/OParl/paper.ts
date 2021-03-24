import { gql } from 'apollo-server-core';

export const paperGQL = gql`
  extend type Query {
    oParlPapers: [OParlPaper!]
  }

  type OParlPaper {
    id: ID!
    "id from the oparl object = url where the json is located"
    externalId: String!
    "oParl type = url where the type is specified"
    type: String!
    created: Date
    modified: Date
    keyword: [String!]
    web: String
    deleted: Boolean
    body: OParlBody
    name: String
    reference: String
    date: Date
    paperType: String
    relatedPaper: [OParlPaper!]
    superordinatedPaper: [OParlPaper!]
    subordinatedPaper: [OParlPaper!]
    mainFile: OParlFile
    auxiliaryFile: [OParlFile!]
    location: [OParlLocation!]
    originatorPerson: [OParlPerson!]
    underDirectionOf: [OParlOrganization!]
    originatorOrganization: [OParlOrganization!]
    consultation: [OParlConsultation!]
  }
`;
