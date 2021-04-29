import { isArray, isString } from 'lodash';

export const isStringArray = (value: unknown): value is string[] => {
  if (!isArray(value)) return false;

  return value.reduce<boolean>(
    (previous, current) => previous && isString(current),
    true,
  );
};
