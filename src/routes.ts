import { Router } from "express";
import adminController from "./controllers/adminController";
import bookingController from "./controllers/bookingController";
import contactController from "./controllers/contactController";
import roomController from "./controllers/roomController";
import userController from "./controllers/userController";
import { authMiddleware } from "./middleware/authMiddleware";

const router = Router();

//Rutas para Admin
router.use("/api/login", adminController);

// Rutas para Bookings
router.use("/api/bookings", authMiddleware, bookingController);

// Rutas para Contacts
router.use("/api/contacts", authMiddleware, contactController);

// Rutas para Rooms
router.use("/api/rooms", authMiddleware, roomController);

// Rutas para Users
router.use("/api/users", authMiddleware, userController);

export default router;
