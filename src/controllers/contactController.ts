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
    res.json({ contacts });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const contact = await getContact(id);
    res.json({ contact });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contact = await postContact(req.body);
    res.json({ success: "Contact create success", data: contact });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contact = await putContact(req.body);
    res.json({ success: "Contact successfully updated", data: contact });
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const contact = await deleteContact(id);
      res.json({ success: "Contact successfully deleted", data: contact });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
