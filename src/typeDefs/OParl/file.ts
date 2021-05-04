import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const fileGQL = gql`
  extend type Query {
    oParlFiles(
      externalIds: [String!]
      keyword: [String!]
    ): [OParlFile!]
  }

  type OParlFile {
    accessUrl: String!
    agendaItem(offset: Int, pageSize: Int): [OParlAgendaItem!]
    date: Date
    derivativeFile(offset: Int, pageSize: Int): [OParlFile!]
    downloadUrl: String
    externalServiceUrl: String
    fileLicense: String
    fileName: String
    masterFile: OParlFile
    meeting(offset: Int, pageSize: Int): [OParlMeeting!]
    mimeType: String
    name: String
    paper(offset: Int, pageSize: Int): [OParlPaper!]
    sha1Checksum: String
    sha512Checksum: String
    size: Int
    text: String
    ${oParlBase}
  }
`;
