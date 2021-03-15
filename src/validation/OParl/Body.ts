import { isString } from 'lodash';
import {
  isArrayOfType,
  isStringArrayOrNullish,
  isStringOrNullish,
} from '../basic';
import { isValidOParlBase, OParlBaseJSON } from './OParlBase';

type LegislativeTermJSON = { id: string }; // TODO: add remaining properties and refine validation

type ExpectedJSON = {
  ags?: string;
  classification?: string;
  contactEmail?: string;
  contactName?: string;
  equivalent?: string[];
  legislativeTerm: LegislativeTermJSON[];
  license?: string;
  licenseValidSince?: string;
  location?: string;
  meeting: string;
  name: string;
  oparlSince?: string;
  organization: string;
  paper: string;
  person: string;
  rgs?: string;
  website?: string;
};

export const isValidBody = (
  json: unknown,
): json is ExpectedJSON & OParlBaseJSON => {
  return (
    isStringOrNullish((json as ExpectedJSON).ags) &&
    isStringOrNullish((json as ExpectedJSON).classification) &&
    isStringOrNullish((json as ExpectedJSON).contactEmail) &&
    isStringOrNullish((json as ExpectedJSON).contactName) &&
    isStringArrayOrNullish((json as ExpectedJSON).equivalent) &&
    isArrayOfType((json as ExpectedJSON).legislativeTerm, (value): value is {
      id: string;
    } => isString((value as { id: unknown }).id)) &&
    isStringOrNullish((json as ExpectedJSON).license) &&
    isStringOrNullish((json as ExpectedJSON).licenseValidSince) &&
    isStringOrNullish((json as ExpectedJSON).location) &&
    isString((json as ExpectedJSON).meeting) &&
    isString((json as ExpectedJSON).name) &&
    isStringOrNullish((json as ExpectedJSON).oparlSince) &&
    isString((json as ExpectedJSON).organization) &&
    isString((json as ExpectedJSON).paper) &&
    isString((json as ExpectedJSON).person) &&
    isStringOrNullish((json as ExpectedJSON).rgs) &&
    isStringOrNullish((json as ExpectedJSON).website) &&
    isValidOParlBase(json)
  );
};
