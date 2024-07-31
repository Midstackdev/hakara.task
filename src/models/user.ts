import mongoose, { Document, Schema } from "mongoose";

export type IUser = {
  _id?: string;
  name: string;
  email: string;
};

export type UserDoc = IUser & Document;

/*
 * Create the schmema that will reflect the MongoDB collection
 */
const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<UserDoc>("User", UserSchema);
