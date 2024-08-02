import ChargingStation from "../../src/models/chargingStation";
import { app } from "../utils";
import User from "../../src/models/user";
import Organization from "../../src/models/organization";
import { clearDB } from "../../src/config";

describe("Charging process suite", () => {
  let stationId: string;
  let userId: string;
  let organizationId: string;

  beforeAll(async () => {
    const user = await User.create({
      name: "Dojo Smith",
      email: "dj@sm.com",
    });
    userId = user._id.toString();

    const organization = await Organization.create({
      name: "Sertex Corp",
      address: "24th Albun st.",
    });
    organizationId = organization._id.toString();

    const station = await ChargingStation.create({
      name: "Test Station",
      location: "Test Location",
      plugType: "Type 1",
      chargingPower: 50,
      organizationId,
    });

    stationId = station._id.toString();
  });

  afterAll(async () => {
    await clearDB();
  });
  describe("Start charging", () => {
    it("should start the charging process", async () => {
      const response = await app.post(`/api/charge/${stationId}/start`).send({
        organizationId,
        userId,
      });
      expect(response.status).toBe(200);
    });
  });

  describe("Stop charging", () => {
    it("should stop the charging process", async () => {
      const response = await app.post(`/api/charge/${stationId}/stop`).send({
        organizationId,
        userId,
      });
      expect(response.status).toBe(200);
    });
  });
});
