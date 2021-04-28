export interface OParlBase {
  externalId: string;
  type: string; // this needs to be refined once we add a more specific validation of the "type" entry in the models
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
  type: { type: String, required: true }, // TODO: refine "type" for different models
  created: Date,
  modified: Date,
  license: String,
  keyword: [{ type: String, required: true }],
  web: String,
  deleted: Boolean,
});
