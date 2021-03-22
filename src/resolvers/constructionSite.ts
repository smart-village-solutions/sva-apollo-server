import { ConstructionSite } from '../models/ConstructionSite';

export const createConstructionSite = async (
  _,
  {
    category,
    cause,
    description,
    direction,
    endDate,
    imageUri,
    lat,
    lon,
    locationDescription,
    restrictions,
    startDate,
    title,
  },
) => {
  const constructionSite = new ConstructionSite({
    category,
    cause,
    description,
    direction,
    endDate,
    imageUri,
    location: { lat, lon },
    locationDescription,
    restrictions,
    startDate,
    title,
  });
  await constructionSite.save();
  return constructionSite;
};

export const constructionSites = () => ConstructionSite.find();
