import { Router, Request, Response } from "express";
import { BookingModel } from "../models/bookingModel";
import {
  deleteBooking,
  getBooking,
  getBookings,
  postBooking,
  putBooking,
} from "../services/bookingService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const bookings: BookingModel[] = await getBookings();
    res.json({ bookings });
  } catch (error) {
    console.error("Error in obtaining all bookings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const booking = await getBooking(id);
    res.json({ booking });
  } catch (error) {
    console.error("Error in obtaining the booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/:id", async (req: Request, res: Response) => {
  try {
    const booking = await postBooking(req.body);
    res.json([{ success: "Booking create success" }]);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const booking = await putBooking(req.body);
    res.json([{ success: "Booking successfully updated" }]);
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const booking = await deleteBooking(id);
    res.json([{ success: "Booking successfully deleted" }]);
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
