import { ICharge } from "../models/charge";

export enum STATUS {
  "IDLE" = "IDLE",
  "BUSY" = "BUSY",
}
export const STATUS_VALUES = Object.values(STATUS);

export type ChargeDTO = Pick<
  ICharge,
  "organizationId" | "chargingStationId" | "userId"
>;
