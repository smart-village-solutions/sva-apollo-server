import { gql } from 'apollo-server-core';

export const fileGQL = gql`
  extend type Query {
    oParlFiles: [OParlFile!]
  }

  type OParlFile {
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
    accessUrl: String!
    agendaItem: [OParlAgendaItem!]
    date: Date
    derivativeFile: [OParlFile!]
    downloadUrl: String
    externalServiceUrl: String
    fileLicense: String
    fileName: String
    masterFile: OParlFile
    meeting: [OParlMeeting!]
    mimeType: String
    name: String
    paper: [OParlPaper!]
    sha1Checksum: String
    size: Int
    text: String
  }
`;
