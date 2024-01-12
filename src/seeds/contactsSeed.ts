import { faker } from "@faker-js/faker";
import { ContactModel } from "../models/contactModel";
import mongoose from "mongoose";

export const generateFakeContact = (): ContactModel => {
  return {
    _id: new mongoose.Types.ObjectId(),
    photo: faker.image.avatarLegacy(),
    date: faker.date.past({ years: 1 }).toISOString().split("T")[0],
    hour: faker.date.past().toLocaleTimeString(),
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    telephone: faker.phone.number(),
    archived: faker.datatype.boolean(),
    review: faker.lorem.sentence(),
  };
};
