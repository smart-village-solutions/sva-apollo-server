import { isObjectLike } from 'lodash';

import { parseDate } from '../dateParser';
import { mapToIds } from '../parserHelpers';

// only the necessary validation for parsing is done here.
// the created database object will be validated after creation before saving
// by using the .validate method that checks against the provided schema
export const parseMeeting = (json) => {
  if (isObjectLike(json)) {
    const externalId = json.id; // change the id given to us to be the externalId instead
    delete json.id; // remove the id key from the json to ensure we do not preset it for mongo db

    return {
      ...json,
      externalId,
      created: parseDate(json.created),
      modified: parseDate(json.modified),

      start: parseDate(json.start),
      end: parseDate(json.end),

      agendaItem: mapToIds(json.agendaItem),
      auxiliaryFile: mapToIds(json.auxiliaryFile),
      invitation: json.invitation?.id,
      location: json.location?.id,
      resultsProtocol: json.resultsProtocol?.id,
      verbatimProtocol: json.verbatimProtocol?.id,
    };
  }
};
