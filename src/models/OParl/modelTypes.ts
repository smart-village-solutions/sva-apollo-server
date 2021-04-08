import { Body } from './Body';
import { Consultation } from './Consultation';
import { File } from './File';
import { LegislativeTerm } from './LegislativeTerm';
import { Location } from './Location';
import { Meeting } from './Meeting';
import { Membership } from './Membership';
import { Organization } from './Organization';
import { Paper } from './Paper';
import { Person } from './Person';
import { System } from './System';

export type OParlModel =
  | typeof Body
  | typeof Consultation
  | typeof File
  | typeof LegislativeTerm
  | typeof Location
  | typeof Meeting
  | typeof Membership
  | typeof Organization
  | typeof Paper
  | typeof Person
  | typeof System;
