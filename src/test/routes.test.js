"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
describe("Generar token", () => {
    it("si la generación y validación del token es valida debe retornarme un status 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send({ email: adminEmail, password: adminPassword });
        expect(response.statusCode).toEqual(200);
    }));
    it("si la generación y validación del token NO es válida deberia devolverme un 401", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send({ email: "fail@fail.com", password: "6585" });
        expect(response.statusCode).toEqual(401);
    }));
});
describe("Pruebas del GET bookings", () => {
    it("si el token es valido y la ruta de get bookings es correcta deberia poder retornarme un status 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const loginResponse = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send({ email: adminEmail, password: adminPassword });
        if (loginResponse.status === 200) {
            const token = loginResponse.body.token;
            const bookingsResponse = yield (0, supertest_1.default)(app_1.default)
                .get("/api/bookings/")
                .set("Authorization", `Bearer ${token}`);
            expect(bookingsResponse.statusCode).toEqual(200);
        }
    }));
    it("si el token es valido pero ruta de get bookings NO es correcta deberia poder retornarme un status 404", () => __awaiter(void 0, void 0, void 0, function* () {
        const loginResponse = yield (0, supertest_1.default)(app_1.default)
            .post("/api/login")
            .send({ email: adminEmail, password: adminPassword });
        if (loginResponse.status === 200) {
            const token = loginResponse.body.token;
            const bookingsResponse = yield (0, supertest_1.default)(app_1.default)
                .get("/api/fail/")
                .set("Authorization", `Bearer ${token}`);
            expect(bookingsResponse.statusCode).toEqual(404);
        }
    }));
});
