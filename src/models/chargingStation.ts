import mongoose, { Document, Schema } from "mongoose";

export type IChargingStation = {
  _id?: string;
  location: string;
  plugType: string;
  chargingPower: number;
  organizationId: string;
};

export type ChargingStationDoc = IChargingStation & Document;

/*
 * Create the schmema that will reflect the MongoDB collection
 */
const ChargingStationSchema: Schema = new Schema(
  {
    location: { type: String, required: true },
    plugType: { type: String, required: true },
    chargingPower: { type: Number, required: true },
    organizationId: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ChargingStationDoc>(
  "ChargingStation",
  ChargingStationSchema
);
