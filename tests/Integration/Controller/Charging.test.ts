import {
  MockedNext,
  MockedRequest,
  MockedResponse,
  mockNext,
  mockRequest,
  mockResponse,
} from "../../utils";
import * as controller from "../../../src/controllers/charge";

describe("handle charching process", () => {
  let req: MockedRequest;
  let res: MockedResponse;
  const next: MockedNext = mockNext();

  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
    req.body = {
      userId: "",
      organizationId: "",
      chargingStationId: "",
    };
  });

  describe("statrt charging", () => {
    it("throws an error without chargingStationId param", async () => {
      req.body = {
        userId: "66aa985f12f66af7358fd9f5",
        organizationId: "66aa992f0d5feaf4c2850f3e",
        chargingStationId: "66ab3d6ea68e4444b2dc8253",
      };
      // await controller.start(req, res, next);
      // expect(res.status).toHaveBeenCalledWith(500);
      // expect(res.json).toHaveBeenCalledWith({ message: "Station is invalid" });
    });
  });
});
