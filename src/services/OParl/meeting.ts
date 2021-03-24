import { fetch } from 'apollo-env';

import { Meeting } from '../../models';
import { parseMeeting } from '../../parser';

// import flow
// 1. fetch json
// 2. create db object
//   2.1. validation necessary for parsing (done in parser)
//   2.2. parse json
//   2.3. create object
// 3. validate db object
// 4. queue new related objects
// 5. save to db

export const importMeeting = async (url: string) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();

      // TODO: check for previous existence

      const lt = new Meeting(parseMeeting(json));

      await lt.validate();

      // TODO: check for persons, organizations, files and location to import

      return lt.save();
    } else {
      throw new Error(
        `Error while fetching Meeting from : ${url}! \n response.status: ${response.status}`,
      );
    }
  } catch (e) {
    console.log(e);
  }
};
