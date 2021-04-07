export const oParlBase = `
  id: ID!
  "id from the oparl object = url where the json is located"
  externalId: String!
  "oParl type = url where the type is specified"
  type: String!
  created: Date
  modified: Date
  license: String
  keyword: [String!]
  web: String
  deleted: Boolean
`;
