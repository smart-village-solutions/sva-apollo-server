import { isObjectLike } from 'lodash';
import {
  isBooleanOrNullish,
  isStringArrayOrNullish,
  isStringOrNullish,
} from '../basic';

export type OParlBaseJSON = {
  id: string;
  type: string;
  created: string;
  modified: string;
  keyword?: string[];
  web?: string;
  deleted?: boolean;
};

export const isValidOParlBase = (json: unknown): json is OParlBaseJSON => {
  if (!isObjectLike(json)) {
    return false;
  }

  return (
    typeof (json as OParlBaseJSON).id === 'string' &&
    typeof (json as OParlBaseJSON).type === 'string' &&
    typeof (json as OParlBaseJSON).created === 'string' &&
    typeof (json as OParlBaseJSON).modified === 'string' &&
    isStringArrayOrNullish((json as OParlBaseJSON).keyword) &&
    isStringOrNullish((json as OParlBaseJSON).web) &&
    isBooleanOrNullish((json as OParlBaseJSON).deleted)
  );
};
