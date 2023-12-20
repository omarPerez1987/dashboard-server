import { Router, Request, Response } from "express";
import { BookingModel } from "../models/bookingModel";
import { getBookings, postBookings } from "../services/bookingService";
import { deleteContacts, putContacts } from "../services/contactService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const bookings: BookingModel[] = await getBookings();
  res.send(bookings);
});

router.post("/post", async (req: Request, res: Response) => {
  const booking = await postBookings();
  res.json(booking);
});

router.put("/put/:id", async (req: Request, res: Response) => {
  const booking = await putContacts();
  res.send(booking);
});

router.delete("/delete/:id",async (req: Request, res: Response) => {
  const booking = await deleteContacts();
  res.send(booking);
});

export default router;
