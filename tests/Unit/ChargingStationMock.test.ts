import ChargingStation from "../../src/models/chargingStation";
import { app, objectId } from "../utils";

jest.mock("../../src/models/ChargingStation");

describe("Charging Station CRUD Operations", () => {
  let stationId: string;

  beforeEach(() => {
    stationId = objectId().toString();
  });

  it("should create a new charging station", async () => {
    const newStation = {
      _id: stationId,
      name: "Station 1",
      location: "Location 1",
      plugType: "Type 1",
      chargingPower: 50,
      organizationId: objectId().toString(),
    };

    console.log(newStation);

    (ChargingStation.create as jest.Mock).mockResolvedValue(newStation);

    const response = await app.post("/api/station").send(newStation);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id");
    expect(ChargingStation.create).toHaveBeenCalledWith(newStation);
  });

  it("should retrieve all charging stations", async () => {
    const stations = [{ _id: stationId, name: "Station 1" }];
    (ChargingStation.find as jest.Mock).mockResolvedValue(stations);

    const response = await app.get("/api/station");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(ChargingStation.find).toHaveBeenCalled();
  });

  it("should retrieve a charging station by ID", async () => {
    const station = { _id: stationId, name: "Station 1" };
    (ChargingStation.findById as jest.Mock).mockResolvedValue(station);

    const response = await app.get(`/api/station/${stationId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", stationId);
    expect(ChargingStation.findById).toHaveBeenCalledWith(stationId);
  });

  it("should update a charging station", async () => {
    const updatedStation = { _id: stationId, name: "Updated Station" };
    (ChargingStation.findByIdAndUpdate as jest.Mock).mockResolvedValue(
      updatedStation
    );

    const response = await app
      .put(`/api/station/${stationId}`)
      .send(updatedStation);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "Updated Station");
    expect(ChargingStation.findByIdAndUpdate).toHaveBeenCalledWith(
      stationId,
      updatedStation,
      { new: true }
    );
  });

  it("should delete a charging station", async () => {
    (ChargingStation.findByIdAndDelete as jest.Mock).mockResolvedValue(null);

    const response = await app.delete(`/api/station/${stationId}`);
    expect(response.status).toBe(200);
    expect(ChargingStation.findByIdAndDelete).toHaveBeenCalledWith(stationId);
  });
});
