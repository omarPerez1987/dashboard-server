import { Request, Response } from "express";
import usersData from "../JSON/users.json";
import { UserModel } from "../models/userModel";

export const getUsers = async (): Promise<UserModel[]> => {
  return usersData;
};
export const getUser = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "Users find successfully" }];
};
export const postUser = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "Users create successfully" }];
};
export const putUser = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "Users update successfully" }];
};
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Object[]> => {
  return [{ success: "Users deleted successfully" }];
};
