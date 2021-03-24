import { isObjectLike } from 'lodash';

import { parseDate } from '../dateParser';

// only the necessary validation for parsing is done here.
// the created database object will be validated after creation before saving
// by using the .validate method that checks against the provided schema
export const parseFile = (json) => {
  if (isObjectLike(json)) {
    const externalId = json.id; // change the id given to us to be the externalId instead
    delete json.id; // remove the id key from the json to ensure we do not preset it for mongo db
    return {
      ...json,
      externalId,
      created: parseDate(json.created),
      modified: parseDate(json.modified),

      date: parseDate(json.date),
    };
  }
};
