import { app } from "../utils";

describe("Example Test Suite", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });
});

describe("Home route test", () => {
  it("/api/home returns status 200", async () => {
    const res = await app.get("/api/home");
    expect(res.statusCode).toBe(200);
  });

  describe("Non existent route test", () => {
    it("/api/notfound returns status 404", async () => {
      const res = await app.get("/api/notfound");
      expect(res.statusCode).toBe(404);
    });
  });
});
