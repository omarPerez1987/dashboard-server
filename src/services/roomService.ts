import roomsData from "../JSON/rooms.json";
import { RoomModel } from "../models/roomModel";

export const getRooms = async (): Promise<RoomModel[]> => {
  return roomsData;
};

export const postRooms = async (): Promise<{ success: string }[]> => {
  return [{ success: "Rooms create successfully" }];
};

export const putRooms = async (): Promise<{ success: string }[]> => {
  return [{ success: "Rooms update successfully" }];
};

export const deleteRooms = async (): Promise<{ success: string }[]> => {
  return [{ success: "Rooms deleted successfully" }];
};
