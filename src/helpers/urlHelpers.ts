export const appendURIParams = (
  url: string,
  ...params: (string | undefined)[]
) => {
  const filteredParams = params.filter(
    (value): value is string => typeof value === 'string',
  );

  if (!filteredParams.length) return url;

  const joinedParams = filteredParams.join('&');

  return `${url}${url.includes('?') ? '&' : '?'}${joinedParams}`;
};
