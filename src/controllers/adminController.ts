import { Request, Response, Router } from "express";
import dotenv from "dotenv";
import { generateAccessToken } from "../services/adminServices";
dotenv.config();

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === adminEmail && password === adminPassword) {
    const adminToken = generateAccessToken(email, password);
    if (adminToken) {
      res.json({ token: adminToken });
    }
    return res.status(500).json({error: "Token was not generated internal error"})
  }
  return res.status(401).json({ error: "Unauthorized: Invalid credentials" });
});

export default router;
