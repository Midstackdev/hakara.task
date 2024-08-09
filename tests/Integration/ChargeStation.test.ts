import { app, objectId } from "../utils";
import { clearDB } from "../../src/config";

describe("Charging Station CRUD Operations", () => {
  let stationId: string;

  afterAll(async () => {
    await clearDB();
  });

  it("should create a new charging station", async () => {
    const response = await app.post("/api/station").send({
      location: "Location 1",
      plugType: "Type 1",
      chargingPower: 50,
      organizationId: objectId(),
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id");
    stationId = response.body._id;
  });

  it("should retrieve all charging stations", async () => {
    const response = await app.get("/api/station");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should retrieve a charging station by ID", async () => {
    const response = await app.get(`/api/station/${stationId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", stationId);
  });

  it("should update a charging station", async () => {
    const response = await app.put(`/api/station/${stationId}`).send({
      location: "Updated Location",
      plugType: "Updated Type",
      chargingPower: 100,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("location", "Updated Location");
  });

  it("should delete a charging station", async () => {
    const response = await app.delete(`/api/station/${stationId}`);
    expect(response.status).toBe(200);
  });
});
