import { Router, Request, Response } from "express";
import { RoomModel } from "../models/roomModel";
import {
  deleteRoom,
  getRoom,
  getRooms,
  postRoom,
  putRoom,
} from "../services/roomService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const rooms: RoomModel[] = await getRooms();
    res.json({ rooms });
  } catch (error) {
    console.error("Error in obtaining all rooms:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const room = await getRoom(id);
    res.json({ room });
  } catch (error) {
    console.error("Error in obtaining the room:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const room = await postRoom();
    res.json([{ success: "Room create success", data: room }]);
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const room = await putRoom(req.body);
    res.json([{ success: "Room successfully updated" }]);
  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const room = await deleteRoom(id);
    res.json([{ success: "Room successfully deleted"}]);
  } catch (error) {
    console.error("Error deleting room:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
