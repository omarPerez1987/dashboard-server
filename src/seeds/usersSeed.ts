import { faker } from "@faker-js/faker";
import { UserModel } from "../models/userModel";
import mongoose from "mongoose";

export const generateFakeUser = (): UserModel => {
  return {
    _id: new mongoose.Types.ObjectId(),
    photo: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    description: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(["active", "inactive"]),
    startDate: faker.date.past().toLocaleDateString(),
  };
};
