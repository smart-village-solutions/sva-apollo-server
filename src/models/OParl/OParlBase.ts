export interface OParlBase {
  externalId: string;
  type: string; // TODO: refine here?
  created: Date;
  modified: Date;
  keyword?: string[];
  web?: string;
  deleted?: boolean;
}
