import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY || "undefined";

export const generateAccessToken = (
  email: string,
  password: string
): string | null => {
  return jwt.sign({ email }, secretKey);
};