import { Router, Request, Response } from "express";
import { BookingModel } from "../models/bookingModel";
import { getBookings, postBookings } from "../services/bookingService";
import { deleteContacts, putContacts } from "../services/contactService";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authenticateToken, async (req: Request, res: Response) => {
  const bookings: BookingModel[] = await getBookings();
  res.send(bookings);
});

router.post("/post", authenticateToken, async (req: Request, res: Response) => {
  const booking = await postBookings();
  res.json(booking);
});

router.put("/put/:id", authenticateToken, async (req: Request, res: Response) => {
  const booking = await putContacts();
  res.send(booking);
});

router.delete("/delete/:id",authenticateToken, async (req: Request, res: Response) => {
  const booking = await deleteContacts();
  res.send(booking);
});

export default router;
