import { Router, Request, Response } from "express";
import { ContactModel } from "../models/contactModel";
import {
  deleteContact,
  getContact,
  getContacts,
  postContact,
  putContact,
} from "../services/contactService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const contacts: ContactModel[] = await getContacts();
    res.json({ contacts });
  } catch (error) {
    console.error("Error in obtaining all contacts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const contact = await getContact(id);
    res.json({ contact });
  } catch (error) {
    console.error("Error in obtaining the contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/:id", async (req: Request, res: Response) => {
  try {
    const contact = await postContact(req.body);
    res.json([{ success: "Contact create success" }]);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const contact = await putContact(req.body);
    res.json([{ success: "Contact successfully updated" }]);
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const contact = await deleteContact(id);
    res.json([{ success: "Contact successfully deleted" }]);
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
