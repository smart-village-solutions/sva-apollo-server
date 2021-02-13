import { ConstructionSite } from "./models/ConstructionSite.js";
import mongoose from 'mongoose';

const constructionSite = new ConstructionSite({
  category: "Kategorie",
  cause: "Grund",
  description: "Beschreibung",
  direction: "Richtung",
  endDate: "Ende",
  imageUri: "Bild",
  location: {
    lat: "Lat",
    lon: "Lon"
  },
  locationDescription: "Ortsinfo",
  restrictions: ["Beschränkung 1", "Beschränkung 2"],
  startDate: "Start",
  title: "Name"
}).save();