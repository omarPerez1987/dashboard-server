import { Router, Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../services/userService";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users: UserModel[] = await getUsers();
    res.json({ users });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await postUser(req.body);
    res.json({ success: "user create success", data: user });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await putUser(req.body);
    res.json({ success: "user successfully updated", data: user });
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const user = await deleteUser(id);
      res.json({ success: "user successfully deleted", data: user });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
