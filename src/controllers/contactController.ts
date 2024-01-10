import { Router, Request, Response, NextFunction } from "express";
import { ContactModel } from "../models/contactModel";
import {
  deleteContact,
  getContact,
  getContacts,
  postContact,
  putContact,
} from "../services/contactService";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contacts: ContactModel[] = await getContacts();
    res.json({ data: contacts });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const contact = await getContact(_id);
    res.json({ data: contact });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contact = await postContact(req.body);
    res.json({ data: contact });
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contact = await putContact(req.body);
    res.json({ data: contact });
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const _id = req.params.id;
      const contact = await deleteContact(_id);
      res.json({ data: contact });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
