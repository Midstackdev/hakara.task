import mongoose, { Document, Schema } from "mongoose";
import { STATUS, STATUS_VALUES } from "../types";

export type IChargingStation = {
  _id?: string;
  location: string;
  plugType: string;
  status: string;
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
    status: { type: String, enum: STATUS_VALUES, default: STATUS.IDLE },
    organizationId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const ChargingStation = mongoose.model<ChargingStationDoc>(
  "ChargingStation",
  ChargingStationSchema
);
export default ChargingStation;
