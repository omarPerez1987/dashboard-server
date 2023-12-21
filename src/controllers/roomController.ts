import { Router, Request, Response } from "express";
import { RoomModel } from "../models/roomModel";
import {
  deleteRooms,
  getRooms,
  postRooms,
  putRooms,
} from "../services/roomService";

const router = Router();

router.get("/getAll", async (req: Request, res: Response) => {
  const rooms: RoomModel[] = await getRooms();
  res.send(rooms);
});

router.post("/post/:id", async (req: Request, res: Response) => {
  const room = await postRooms();
  res.json(room);
});

router.put("/put/:id", async (req: Request, res: Response) => {
  const room = await putRooms();
  res.send(room);
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const room = await deleteRooms();
  res.send(room);
});

export default router;
