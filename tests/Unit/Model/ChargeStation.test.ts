import { clearDB } from "../../../src/config";
import ChargingStation, {
  IChargingStation,
} from "../../../src/models/chargingStation";
import { STATUS } from "../../../src/types";

describe("ChargingStaion Model Tests", () => {
  let stationId: string;
  let station: IChargingStation & { _id: string };

  const stationData = {
    location: "3462 Awal Street",
    plugType: "5-pin",
    chargingPower: 230,
    organizationId: "66aa992f0d5feaf4c2850f3e",
  };
  beforeAll(async () => {
    station = await ChargingStation.create({
      ...stationData,
    });
    stationId = station._id.toString();
  });

  afterAll(async () => {
    await clearDB();
  });

  it("should create a station", () => {
    expect(station.location).toBe(stationData.location);
    expect(station.organizationId.toString()).toBe(stationData.organizationId);
  });

  it("should create a station with status of IDLE", () => {
    expect(station.status).toBe(STATUS.IDLE);
  });

  it("should find a station", async () => {
    const found = await ChargingStation.findById(stationId);
    expect(found?.location).toBe(stationData.location);
    expect(found?.organizationId.toString()).toBe(stationData.organizationId);
  });

  it("should update a station", async () => {
    const update = { ...stationData, plugType: "3-pin" };
    const updatedStation = await ChargingStation.findByIdAndUpdate(
      stationId,
      update,
      { new: true }
    );
    expect(updatedStation?.organizationId.toString()).toBe(
      update.organizationId
    );
    expect(updatedStation?.plugType).toBe(update.plugType);
  });

  it("should delete a station", async () => {
    const deleted = await ChargingStation.findByIdAndDelete(stationId);
    expect(deleted?._id.toString()).toBe(stationId);
  });

  it("should not find the deleted station", async () => {
    const deleted = await ChargingStation.findById(stationId);
    expect(deleted).toBe(null);
  });
});
