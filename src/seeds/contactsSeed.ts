import { faker } from "@faker-js/faker";
import { ContactModel } from "../models/contactModel";
import mongoose from "mongoose";

export const generateFakeContact = (): ContactModel => {
  return {
    _id: new mongoose.Types.ObjectId(),
    date: faker.date.past().toLocaleDateString(),
    hour: faker.date.past().toLocaleTimeString(),
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    telephone: faker.phone.number(),
    archived: faker.datatype.boolean(),
    review: faker.lorem.sentence(),
  };
};
