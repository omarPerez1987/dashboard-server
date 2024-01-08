import { Request, Response } from "express";
import roomsData from "../JSON/rooms.json";
import { RoomModel, RoomSchema } from "../models/roomModel";
import { generateFakeRoom } from "../seeds/roomsSeed";

export const getRooms = async (): Promise<RoomModel[]> => {
  try {
    return await RoomSchema.find().exec();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener las habitaciones en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const getRoom = async (id: string): Promise<RoomModel | null> => {
  try {
    return await RoomSchema.findById(id).exec();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al obtener la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const postRoom = async (): Promise<RoomModel> => {
  try {
    const fakeContact = generateFakeRoom();
    const room = new RoomSchema(fakeContact);
    return await room.save();
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al guardar la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const putRoom = async (body: RoomModel): Promise<RoomModel | null> => {
  try {
    return await RoomSchema.findByIdAndUpdate(body);
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al actualizar la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};

export const deleteRoom = async (id: string): Promise<RoomModel | null> => {
  try {
    return await RoomSchema.findOneAndDelete({ id: id });
  } catch (error) {
    console.log(error);
    const databaseError: any = new Error(
      "Error al eliminar la habitacion en la base de datos."
    );
    databaseError.status = 404;
    throw databaseError;
  }
};
