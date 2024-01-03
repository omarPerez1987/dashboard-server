import { Request, Response } from "express";
import roomsData from "../JSON/rooms.json";
import { RoomModel, RoomSchema } from "../models/roomModel";
import { generateFakeRoom } from "../seeds/roomsSeed";

export const getRooms = async (): Promise<RoomModel[]> => {
  try {
    return await RoomSchema.find().exec();
  } catch (error) {
    console.error("Error when obtaining rooms:", error);
    throw error;
  }
};

export const getRoom = async (id: string): Promise<RoomModel | null> => {
  try {
    return await RoomSchema.findById(id).exec();
  } catch (error) {
    console.error("Error when obtaining room:", error);
    throw error;
  }
};

export const postRoom = async (): Promise<RoomModel> => {
  try {
    const fakeContact = generateFakeRoom();
    const room = new RoomSchema(fakeContact);
    return await room.save();
  } catch (error) {
    console.error("Error room were not saved:", error);
    throw error;
  }
};

export const putRoom = async (body: RoomModel): Promise<RoomModel | null> => {
  try {
    return await RoomSchema.findByIdAndUpdate(body.id, body);
  } catch (error) {
    console.error("Error room were not updated:", error);
    throw error;
  }
};

export const deleteRoom = async (id: string): Promise<RoomModel | null> => {
  try {
    return await RoomSchema.findOneAndDelete({ id: id });
  } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    throw error;
  }
};
