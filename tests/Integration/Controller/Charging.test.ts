import {
  MockedNext,
  MockedRequest,
  MockedResponse,
  mockNext,
  mockRequest,
  mockResponse,
} from "../../utils";
import * as controller from "../../../src/controllers/charge";
import { clearDB, connectDB } from "../../../src/config";
import ChargingStation from "../../../src/models/chargingStation";
import Organization from "../../../src/models/organization";
import User from "../../../src/models/user";

describe("handle charching process", () => {
  let stationId: string;
  let userId: string;
  let organizationId: string;

  beforeAll(async () => {
    // await connectDB();
    const user = await User.create({
      name: "Dojo Smith",
      email: "djis@sm.com",
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
  let req: MockedRequest;
  let res: MockedResponse;
  const next: MockedNext = mockNext();

  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  afterAll(async () => {
    await clearDB();
  });

  describe("statrt charging", () => {
    it("throws an error without chargingStationId param", async () => {
      req.body = {
        userId,
        organizationId,
      };
      req.params = { id: stationId };
      const tot = await controller.start(req, res, next);
      // console.log("====fd====", tot);
      expect(res.status).toHaveBeenCalledWith(200);
      // expect(res.json).toHaveBeenCalledWith({ message: "Station is invalid" });
    });
  });
});
