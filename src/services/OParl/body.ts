import { Body, IBody } from '../../models/OParl/Body';
import { isValidBody } from '../../validation';

// TODO: add test for validation and separate validation and parsing, adding type to parseJSON arg
const parseJSON = (json: unknown): IBody | undefined => {
  if (!isValidBody(json)) {
    return;
  }

  return {
    created: new Date(json.created),
    externalId: json.id,
    legislativeTerm: json.legislativeTerm.map((value) => value.id),
    meeting: json.meeting,
    modified: new Date(json.modified),
    name: json.name,
    organization: json.organization,
    paper: json.paper,
    person: json.person,
    type: json.type,
    ags: json.ags,
    classification: json.classification,
    contactEmail: json.contactEmail,
    contactName: json.contactName,
    deleted: json.deleted,
    equivalent: json.equivalent,
    keyword: json.keyword,
    license: json.license,
    licenseValidSince: json.licenseValidSince
      ? new Date(json.licenseValidSince)
      : undefined,
    location: json.location,
    oparlSince: json.oparlSince ? new Date(json.oparlSince) : undefined,
    rgs: json.rgs,
    web: json.web,
    website: json.website,
  };
};

export const createBodyFromJSON = (json: unknown) => {
  // validate and parse json
  const parsedBody = parseJSON(json);

  // TODO: check for previous existence
  if (parsedBody) {
    return new Body(parsedBody).save();
  }
};
