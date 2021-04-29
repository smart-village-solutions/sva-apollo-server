import { KeywordKey, Keywords, OParlModel } from '../../models';

const mapModelToKey = (model: OParlModel) => {
  switch (model.modelName) {
    case 'AgendaItem':
      return KeywordKey.agendaItem;
    case 'Consultation':
      return KeywordKey.consultation;
    case 'File':
      return KeywordKey.file;
    case 'LegislativeTerm':
      return KeywordKey.legislativeTerm;
    case 'Location':
      return KeywordKey.location;
    case 'Meeting':
      return KeywordKey.meeting;
    case 'Membership':
      return KeywordKey.membership;
    case 'Organization':
      return KeywordKey.organization;
    case 'Paper':
      return KeywordKey.paper;
    case 'Person':
      return KeywordKey.person;
  }
};

export const updateKeywords = async (
  model: OParlModel,
  newKeywords: string[],
) => {
  const key = mapModelToKey(model);

  if (!key) return;

  const keywords = (await Keywords.findOne().exec()) ?? new Keywords({});

  const res = keywords[key] ?? [];

  newKeywords.forEach(
    (newKeyword) => res.includes(newKeyword) || res.push(newKeyword),
  );

  res.sort();

  keywords[key] = res;

  return keywords.save();
};
