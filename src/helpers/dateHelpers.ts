import moment from 'moment';

export const formatToQueryDate = (date?: Date) => {
  if (date)
    return encodeURIComponent(moment(date).format('yyyy-MM-DDThh:mm:ssZ'));
};

export const formatCreatedSince = (date?: Date) => {
  if (date)
    return `created_since=${encodeURIComponent(
      moment(date).format('yyyy-MM-DDThh:mm:ssZ'),
    )}`;
};

export const formatCreatedUntil = (date?: Date) => {
  if (date)
    return `created_until=${encodeURIComponent(
      moment(date).format('yyyy-MM-DDThh:mm:ssZ'),
    )}`;
};
