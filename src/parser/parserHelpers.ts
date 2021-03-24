import { isArray } from 'lodash';

// TODO: improve filter to only match proper ids?
export const mapToIds = (json: unknown): string[] => {
  if (isArray(json)) {
    return json.map((value) => value?.id).filter((id) => id !== undefined);
  }

  // TODO: add error log
  // return empty array as a fallback
  return [];
};
