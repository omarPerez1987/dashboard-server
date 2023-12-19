import { Router, Request, Response } from "express";
import { RoomModel } from "../models/roomModel";
import {
  deleteRooms,
  getRooms,
  postRooms,
  putRooms,
} from "../services/roomService";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/",authenticateToken, async (req: Request, res: Response) => {
  const rooms: RoomModel[] = await getRooms();
  res.send(rooms);
});

router.post("/post", authenticateToken, async (req: Request, res: Response) => {
  const room = await postRooms();
  res.json(room);
});

router.put("/put/:id", authenticateToken, async (req: Request, res: Response) => {
  const room = await putRooms();
  res.send(room);
});

router.delete("/delete/:id", authenticateToken, async (req: Request, res: Response) => {
  const room = await deleteRooms();
  res.send(room);
});

export default router;
