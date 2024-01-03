import app from "../app";
import request from "supertest";
import { generateAccessToken } from "../services/adminServices";

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

describe("Generar token", () => {
  it("si la generación y validación del token es valida debe retornarme un status 200", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ email: adminEmail, password: adminPassword });

    expect(response.statusCode).toEqual(200);
  });

  it("si la generación y validación del token NO es válida deberia devolverme un 401", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ email: "fail@fail.com", password: "6585" });

    expect(response.statusCode).toEqual(401);
  });
});

describe("Pruebas del GET bookings", () => {
  it("si el token es valido y la ruta de get bookings es correcta deberia poder retornarme un status 200", async () => {
    const loginResponse = await request(app)
      .post("/api/login")
      .send({ email: adminEmail, password: adminPassword });
    if (loginResponse.status === 200) {
      const token = loginResponse.body.token;

      const bookingsResponse = await request(app)
        .get("/api/bookings/")
        .set("Authorization", `Bearer ${token}`);

      expect(bookingsResponse.statusCode).toEqual(200);
    }
  });
  it("si el token es valido pero ruta de get bookings NO es correcta deberia poder retornarme un status 404", async () => {
    const loginResponse = await request(app)
      .post("/api/login")
      .send({ email: adminEmail, password: adminPassword });
    if (loginResponse.status === 200) {
      const token = loginResponse.body.token;

      const bookingsResponse = await request(app)
        .get("/api/fail/")
        .set("Authorization", `Bearer ${token}`);

      expect(bookingsResponse.statusCode).toEqual(404);
    }
  });
});
