import _isArray from 'lodash/isArray';

export const isStringOrNullish = (
  value: unknown,
): value is string | undefined | null => {
  return typeof value === 'string' || value == undefined;
};

export const isArrayOfType = <T>(
  data: unknown,
  checkItem: (item: unknown) => item is T,
): data is T[] => {
  if (!data || !_isArray(data)) {
    return false;
  }

  return (data as unknown[]).reduce<boolean>(
    (accumulated, current) => accumulated && checkItem(current),
    true,
  );
};

export const isStringArrayOrNullish = (
  value: unknown,
): value is string[] | undefined | null => {
  if (value == undefined) return true;

  return isArrayOfType(
    value,
    (item): item is string => typeof item === 'string',
  );
};

export const isBooleanOrNullish = (
  value: unknown,
): value is boolean | undefined | null => {
  return typeof value === 'boolean' || value == undefined;
};
