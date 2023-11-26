import request from "supertest";
import app from "src/app";

test("first test", async () => {
  await request(app).get("/").expect(200);
});
