// simple function that creates a date for a given string
// and returns it if it has a positive value (in ms)
export const parseDate = (dateString?: string) => {
  if (dateString?.length) {
    const date = new Date(dateString);

    if (date.valueOf()) return date;
  }
  return;
};
