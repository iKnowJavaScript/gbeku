const request = require("supertest");
const app = require("../dist/app").default;

// import request from "supertest";
// import app from "../src/app";

describe("Make a simple health check", () => {
  it("Should return 'OK' as response", async () => {
    await request(app)
      .get("/api/health-check/")
      .then(res => {
        expect(res.text).toMatch(/OK/);
        expect(res.status).toBe(200);
      });
  });
});
