import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const paperGQL = gql`
  extend type Query {
    oParlPapers(
      externalIds: [String!]
      keyword: [String!]
    ): [OParlPaper!]
  }

  type OParlPaper {
    body: OParlBody
    name: String
    reference: String
    date: Date
    paperType: String
    relatedPaper(offset: Int, pageSize: Int): [OParlPaper!]
    superordinatedPaper(offset: Int, pageSize: Int): [OParlPaper!]
    subordinatedPaper(offset: Int, pageSize: Int): [OParlPaper!]
    mainFile: OParlFile
    auxiliaryFile(offset: Int, pageSize: Int): [OParlFile!]
    location(offset: Int, pageSize: Int): [OParlLocation!]
    originatorPerson(offset: Int, pageSize: Int): [OParlPerson!]
    underDirectionOf(offset: Int, pageSize: Int): [OParlOrganization!]
    originatorOrganization(offset: Int, pageSize: Int): [OParlOrganization!]
    consultation(offset: Int, pageSize: Int): [OParlConsultation!]
    ${oParlBase}
  }
`;
