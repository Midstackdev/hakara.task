import Charge, { ICharge } from "../models/charge";
import ChargingStation, {
  ChargingStationDoc,
  IChargingStation,
} from "../models/chargingStation";
import { ChargeDTO, STATUS, STATUS_VALUES } from "../types";

class ChargingService {
  // constructor(parameters) {

  // }

  public async station(id: string): Promise<ChargingStationDoc | null> {
    const exists = await ChargingStation.findById(id);
    if (!exists) {
      throw new Error("Station is invalid");
    }

    return exists;
  }

  public async charging(id: string): Promise<ICharge | null> {
    const exists = await Charge.findById(id);
    if (!exists) {
      throw new Error("Charger is invalid");
    }

    return exists;
  }

  public async start(id: string, data: ChargeDTO) {
    const station = await this.station(id);

    if (!station) {
      throw new Error("Station is invalid");
    }

    if (station.status === STATUS.BUSY) {
      throw new Error("Station is in use");
    }

    // this will use a transaction

    station.status = STATUS.BUSY;
    await station.save();

    const started = await Charge.create({
      ...data,
      startTime: new Date(),
    });

    return started;
  }

  public async stop(id: string) {}
}

export const chargingService = new ChargingService();
