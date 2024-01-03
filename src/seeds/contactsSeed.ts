import { faker } from "@faker-js/faker";
import { ContactModel } from "../models/contactModel";

export const generateFakeContact = (): ContactModel => {
  return {
    id: faker.string.alphanumeric(7),
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
