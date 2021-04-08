import mongoose from 'mongoose';
import { importOParl } from './importer';

// example usage
// yarn service:oparl:import 'https://www.lwl-pch.sitzung-online.de/oi/oparl/1.0/system.asp'
const startImporter = async () => {
  await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
  });

  await importOParl(process.argv[2]);

  console.log('executed startImporter');
  process.exit();
};

startImporter();
