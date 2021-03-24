import { fetch } from 'apollo-env';

import { Organization } from '../../models';
import { parseOrganization } from '../../parser';
import { fetchPaginatedOParlList } from './paginatedList';

// import flow
// 1. fetch json
// 2. create db object
//   2.1. validation necessary for parsing (done in parser)
//   2.2. parse json
//   2.3. create object
// 3. validate db object
// 4. queue new related objects
// 5. save to db

export const importOrganization = async (
  url: string,
  createdSince?: Date,
  createdUntil?: Date,
) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();

      // TODO: check for previous existence

      if (json?.meeting) {
        json.meeting = await fetchPaginatedOParlList(
          json.meeting,
          createdSince,
          createdUntil,
        );
      }

      const lt = new Organization(parseOrganization(json));

      await lt.validate();

      // TODO: check for person and organization and meetings to import

      return lt.save();
    } else {
      throw new Error(
        `Error while fetching Organization from : ${url}! \n response.status: ${response.status}`,
      );
    }
  } catch (e) {
    console.log(e);
  }
};
