import { fetch } from 'apollo-env';

import { Paper } from '../../models';
import { parsePaper } from '../../parser';

// import flow
// 1. fetch json
// 2. create db object
//   2.1. validation necessary for parsing (done in parser)
//   2.2. parse json
//   2.3. create object
// 3. validate db object
// 4. queue new related objects
// 5. save to db

export const importPaper = async (url: string) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();

      // TODO: check for previous existence

      const lt = new Paper(parsePaper(json));

      await lt.validate();

      // TODO: check for persons, organizations, consultation and files to import

      return lt.save();
    } else {
      throw new Error(
        `Error while fetching Paper from : ${url}! \n response.status: ${response.status}`,
      );
    }
  } catch (e) {
    console.log(e);
  }
};
