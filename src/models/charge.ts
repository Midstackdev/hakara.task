import mongoose, { Document, Schema } from "mongoose";

export type ICharge = {
  _id?: string;
  startTime: Date;
  stopTime: Date;
  chargingStationId: string;
  organizationId: string;
  userId: string;
};

export type ChargeDoc = ICharge & Document;

/*
 * Create the schmema that will reflect the MongoDB collection
 */
const ChargeSchema: Schema = new Schema(
  {
    chargingStationId: { type: Schema.Types.ObjectId, required: true },
    startTime: { type: Date, required: true },
    stopTime: { type: Date, default: "" },
    organizationId: { type: Schema.Types.ObjectId, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

// export default mongoose.model<ChargeDoc>("Charge", ChargeSchema);
const Charge = mongoose.model<ChargeDoc>("Charge", ChargeSchema);
export default Charge;
