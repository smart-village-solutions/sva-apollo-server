import { fetch } from 'apollo-env';

import { Location } from '../../models';
import { parseLocation } from '../../parser';

// import flow
// 1. fetch json
// 2. create db object
//   2.1. validation necessary for parsing (done in parser)
//   2.2. parse json
//   2.3. create object
// 3. validate db object
// 4. queue new related objects
// 5. save to db

export const importLocation = async (url: string) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();

      // TODO: check for previous existence

      const lt = new Location(parseLocation(json));

      await lt.validate();

      // TODO: check for bodies, organizations, meetings and papers to import

      return lt.save();
    } else {
      throw new Error(
        `Error while fetching Location from : ${url}! \n response.status: ${response.status}`,
      );
    }
  } catch (e) {
    console.log(e);
  }
};
