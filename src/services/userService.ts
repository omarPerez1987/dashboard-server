import { Request, Response } from "express";
import usersData from "../JSON/users.json";
import { UserModel, UserSchema } from "../models/userModel";
import { generateFakeUser } from "../seeds/usersSeed";

export const getUsers = async (): Promise<UserModel[]> => {
  try {
    return await UserSchema.find().exec();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener los usuarios en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getUser = async (id: string): Promise<UserModel | null> => {
  try {
    return await UserSchema.findById(id).exec();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const postUser = async (body: UserModel): Promise<UserModel> => {
  try {
    const user = new UserSchema(body);
    return await user.save();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const putUser = async (body: UserModel): Promise<UserModel | null> => {
  try {
    return await UserSchema.findByIdAndUpdate(body);
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al actualizar el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const deleteUser = async (id: string): Promise<UserModel | null> => {
  try {
    return await UserSchema.findOneAndDelete({ id: id });
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al eliminar el usuario en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};
