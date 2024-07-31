import mongoose, { Document, Schema } from "mongoose";

export type IOrganization = {
  _id?: string;
  name: string;
  address: string;
};

export type OrganizationDoc = IOrganization & Document;

/*
 * Create the schmema that will reflect the MongoDB collection
 */
const OrganizationSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<OrganizationDoc>(
  "Organization",
  OrganizationSchema
);
