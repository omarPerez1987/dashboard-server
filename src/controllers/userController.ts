import { Request, Response } from 'express';
import { UserModel } from '../models/userModel';

export const getAllUsers = (req: Request, res: Response) => {
  const users: UserModel[] = [];
  res.json(users);
};