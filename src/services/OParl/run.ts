import mongoose from 'mongoose';
import { databaseLocation, importUrl, mongooseOptions } from '../../../config';
import { importOParl } from './importer';

// example usage
// yarn service:oparl:import 'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/system.asp'
const startImporter = async () => {
  await mongoose.connect(databaseLocation, mongooseOptions);

  const entryUrl = process.argv[2]?.length ? process.argv[2] : importUrl;

  if (entryUrl?.length) {
    await importOParl(entryUrl);
  } else {
    console.warn('Missing proper entry URL');
  }

  console.log('executed startImporter');
  process.exit();
};

startImporter();
