import { Request, Response, Router } from "express";
import { generateAccessToken } from "../middleware/authMiddleware";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email)


  const adminToken = generateAccessToken(email, password);

  if (adminToken) {
    res.json({ token: adminToken });
  } else {
    res.status(401).json({ error: "Unauthorized: Invalid credentials" });
  }
});

export default router;
