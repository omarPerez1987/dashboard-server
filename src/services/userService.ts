import usersData from "../JSON/users.json";
import { UserModel } from "../models/userModel";

export const getUsers = async (): Promise<UserModel[]> => {
  return usersData;
};
export const postUsers = async (): Promise<Object[]> => {
  return [{ success: "Users create successfully" }];
};
export const putUsers = async (): Promise<Object[]> => {
  return [{ success: "Users update successfully" }];
};
export const deleteUsers = async (): Promise<Object[]> => {
  return [{ success: "Users deleted successfully" }];
};