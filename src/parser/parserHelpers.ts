import { isArray } from 'lodash';

export const mapToIds = (json: unknown): string[] => {
  if (isArray(json)) {
    return json.map((value) => value?.id).filter((id) => id !== undefined);
  }

  console.warn(
    'Invalid json passed to "mapToIds". The required input is an array. Got: ',
    json,
  );

  // return empty array as a fallback
  return [];
};
