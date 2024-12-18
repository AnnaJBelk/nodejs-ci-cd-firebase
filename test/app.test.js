const request = require("supertest");
const app = require("../src/app");

describe("Express App", () => {
  it("should return Hello World on the main page", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  });
});
