import { gql } from 'apollo-server-core';

import { oParlBase } from './oParlBase';

export const paperGQL = gql`
  extend type Query {
    oParlPapers: [OParlPaper!]
  }

  type OParlPaper {
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
    ${oParlBase}
  }
`;
