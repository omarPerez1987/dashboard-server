import { Router, Request, Response } from "express";
import { UserModel } from "../models/userModel";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../services/userService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users: UserModel[] = await getUsers();
    res.json({ users });
  } catch (error) {
    console.error("Error in obtaining all users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    res.json({ user });
  } catch (error) {
    console.error("Error in obtaining the user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const user = await postUser();
    res.json([{ success: "user create success", data: user }]);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const user = await putUser(req.body);
    res.json([{ success: "user successfully updated" }]);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await deleteUser(id);
    res.json([{ success: "user successfully deleted" }]);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
