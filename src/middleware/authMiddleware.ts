// middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AdminModel } from "../models/adminModel";

dotenv.config();

const secretKey = process.env.SECRET_KEY || "undefined";
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

export const generateAccessToken = (
  email: string,
  password: string
): string | null => {

  if (email === adminEmail && password === adminPassword) {
    return jwt.sign({ email }, secretKey, { expiresIn: "12h" });
  }
  return null;
};


interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.sendStatus(401).send("Unauthorized: Missing token");

  jwt.verify(token, secretKey, (err: any, user: any) => {
    if (err) return res.sendStatus(403).send("Invalid token");
    req.user = user;
    next();
  });
};
