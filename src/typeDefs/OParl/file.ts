import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const fileGQL = gql`
  extend type Query {
    oParlFiles: [OParlFile!]
  }

  type OParlFile {
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
    sha512Checksum: String
    size: Int
    text: String
    ${oParlBase}
  }
`;
