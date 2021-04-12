export interface OParlBase {
  externalId: string;
  type: string; // TODO: refine here?
  created?: Date;
  modified?: Date;
  license?: string;
  keyword?: string[];
  web?: string;
  deleted?: boolean;
}

// always generate a new object to merge with using Object.assign
export const oParlBaseSchema = () => ({
  externalId: { type: String, required: true },
  type: { type: String, required: true },
  created: Date,
  modified: Date,
  license: String,
  keyword: [{ type: String, required: true }],
  web: String,
  deleted: Boolean,
});
