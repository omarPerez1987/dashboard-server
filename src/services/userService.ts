import { Request, Response } from "express";
import usersData from "../JSON/users.json";
import { UserModel, UserSchema } from "../models/userModel";

export const getUsers = async (): Promise<UserModel[]> => {
  try {
    return await UserSchema.find().exec();
  } catch (error) {
    console.error("Error when obtaining users:", error);
    throw error;
  }
};

export const getUser = async (id: string): Promise<UserModel | null> => {
  try {
    return await UserSchema.findById(id).exec();
  } catch (error) {
    console.error("Error when obtaining user:", error);
    throw error;
  }
};

export const postUser = async (
  body: UserModel
): Promise<UserModel> => {
  try {
    const user = new UserSchema(body);
    return await user.save();
  } catch (error) {
    console.error("Error user were not saved:", error);
    throw error;
  }
};

export const putUser = async (
  body: UserModel
): Promise<UserModel | null> => {
  try {
    return await UserSchema.findByIdAndUpdate(body.id, body);
  } catch (error) {
    console.error("Error user were not updated:", error);
    throw error;
  }
};

export const deleteUser = async (
  id: string
): Promise<UserModel | null> => {
  try {
    return await UserSchema.findOneAndDelete({ id: id });
  } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    throw error;
  }
};;
