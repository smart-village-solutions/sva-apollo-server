import { AgendaItem, IAgendaItem } from './AgendaItem';
import { Body, IBody } from './Body';
import { Consultation, IConsultation } from './Consultation';
import { File, IFile } from './File';
import { ILegislativeTerm, LegislativeTerm } from './LegislativeTerm';
import { ILocation, Location } from './Location';
import { IMeeting, Meeting } from './Meeting';
import { IMembership, Membership } from './Membership';
import { IOrganization, Organization } from './Organization';
import { IPaper, Paper } from './Paper';
import { IPerson, Person } from './Person';
import { ISystem, System } from './System';

export type OParlModel =
  | typeof AgendaItem
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

export type OParlInterface =
  | IAgendaItem
  | IBody
  | IConsultation
  | IFile
  | ILegislativeTerm
  | ILocation
  | IMeeting
  | IMembership
  | IOrganization
  | IPaper
  | IPerson
  | ISystem;
