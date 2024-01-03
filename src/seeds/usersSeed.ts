import { faker } from "@faker-js/faker";
import { UserModel } from "../models/userModel";

export const generateFakeUser = (): UserModel => {
  return {
    id: faker.string.alphanumeric({ length: 7, casing: "upper" }),
    photo: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    description: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(["active", "inactive"]),
    startDate: faker.date.past().toLocaleDateString(),
  };
};
