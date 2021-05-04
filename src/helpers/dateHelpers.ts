import moment from 'moment';

const formatToQueryDate = (date: Date) =>
  encodeURIComponent(moment(date).format('yyyy-MM-DDThh:mm:ssZ'));

export const formatCreatedSince = (date?: Date) => {
  if (date) return `created_since=${formatToQueryDate(date)}`;
};

export const formatCreatedUntil = (date?: Date) => {
  if (date) return `created_until=${formatToQueryDate(date)}`;
};
