import { isStringArray } from '../../helpers';
import { KeywordKey, Keywords } from '../../models';

export const keywordsResolver = {
  Query: {
    oParlKeywordList: async () => {
      const keywords = await Keywords.findOne().exec();

      if (!keywords) {
        return [];
      }

      const res = new Set<string>();

      for (const key in KeywordKey) {
        const keywordsForKey = keywords[key];
        if (isStringArray(keywordsForKey)) {
          keywordsForKey.forEach((keyword) => res.add(keyword));
        }
      }

      return [...res].sort((a, b) =>
        a.toLowerCase() <= b.toLowerCase() ? -1 : 1,
      );
    },
  },
};
