import express, { Express, NextFunction, Request, Response } from "express";

interface CustomError extends Error {
  status?: number;
}

export const errorHandler: express.ErrorRequestHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", error);

  if (error.status === 404) {
    res.status(404).json({ error: error.message });
  }
};
