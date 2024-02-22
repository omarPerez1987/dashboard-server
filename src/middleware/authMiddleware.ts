import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// const secretKey = process.env.SECRET_KEY || "undefined";
const secretKey = "a5ee4d7de630796df53a3c81e0f84ace668edff2d430491382b9064161ec37dea0d5bda76c6c8591a640d5df4c2eefd8d78ac2f39d5a099942589a4a133c3d7b"

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Missing token" });
  }

  try {
    const user = jwt.verify(token, secretKey);
    req.user = user;
    next();
    
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
