import Charge, { ChargeDoc, ICharge } from "../models/charge";
import ChargingStation, {
  ChargingStationDoc,
  IChargingStation,
} from "../models/chargingStation";
import { ChargeDTO, STATUS, STATUS_VALUES } from "../types";

class ChargingService {
  public async station(id: string): Promise<ChargingStationDoc | null> {
    return ChargingStation.findById(id);
  }

  public async charging(query: Record<any, any>): Promise<ChargeDoc | null> {
    return Charge.findOne(query);
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

    const charging = await Charge.create({
      ...data,
      startTime: new Date(),
    });

    return { station, charging };
  }

  public async stop(data: ChargeDTO) {
    const station = await this.station(data.chargingStationId);

    if (!station) {
      throw new Error("Station is invalid");
    }

    if (station.status === STATUS.IDLE) {
      throw new Error("Station is in not use");
    }

    const chagring = await this.charging({ ...data, stopTime: null });

    if (!chagring) {
      throw new Error("Charge is invalid");
    }

    chagring.stopTime = new Date();
    const chagringData = await chagring.save();

    station.status = STATUS.IDLE;
    const stationData = await station.save();

    return {
      stationData,
      chagringData,
    };
  }
}

export const chargingService = new ChargingService();
