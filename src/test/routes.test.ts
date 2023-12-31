import app from "../app";
import request from "supertest";
import { getBookings } from "../services/bookingService";
import { generateAccessToken } from "../services/adminServices";

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

describe("Bookings Endpoints", () => {
  it("debe generar un token", () => {
    if (adminEmail && adminPassword) {
      const token = generateAccessToken(adminEmail, adminPassword);
      expect(token).toBeTruthy();
    } else {
      fail(
        "Las variables de entorno ADMIN_EMAIL o ADMIN_PASSWORD no están configuradas."
      );
    }
  });

  it("si la generación y validación del token es valida debe retornarme todos los bookings", async () => {
    const token =
      adminEmail && adminPassword
        ? generateAccessToken(adminEmail, adminPassword)
        : undefined;

    if (token) {
      const response = await request(app)
        .get("/api/bookings/getAll")
        .set("Authorization", `Bearer ${token}`);

      expect(response.statusCode).toEqual(200);

      const bookings = await getBookings();
      expect(response.body).toEqual(bookings);
    }
  });

  it("si la generación y validación del token NO es válida deberia devolverme un 401", async () => {
    const token =
      adminEmail && adminPassword
        ? generateAccessToken("fail@fail.com", "3451")
        : undefined;

    const response = await request(app)
      .get("/api/bookings/getAll")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toEqual(401);
  });
});
