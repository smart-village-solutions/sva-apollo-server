import { isObjectLike } from 'lodash';
import { parseDate } from '../dateParser';
import { mapToIds } from '../helpers';

// only the necessary validation for parsing is done here.
// the created database object will be validated after creation before saving
// by using the .validate method that checks against the provided schema
export const parseBody = (json) => {
  if (isObjectLike(json)) {
    const externalId = json.id; // change the id given to us to be the externalId instead
    delete json.id; // remove the id key from the json to ensure we do not preset it for mongo db
    return {
      ...json,
      externalId,
      created: parseDate(json.created),

      // filter out objects that have no id
      legislativeTerm: mapToIds(json.legislativeTerm),
      modified: parseDate(json.modified),
      licenseValidSince: parseDate(json.licenseValidSince),
      oparlSince: parseDate(json.oparlSince),
    };
  }
};
