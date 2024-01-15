import { faker } from "@faker-js/faker";
import { UserModel } from "../models/userModel";
import { executeQuery } from "../config/sql";


export const generateTableUser = async () => {
  await executeQuery(`
  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    photo VARCHAR(255),
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    description TEXT,
    status VARCHAR(10),
    startDate DATE,
    position VARCHAR(255),
    password VARCHAR(255)
  )
`);
}


export const generateFakeUser = (): UserModel => {
  return {
    photo: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    description: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(["active", "inactive"]),
    startDate: faker.date.past({ years: 1 }).toISOString().split("T")[0],
    position: faker.helpers.arrayElement(["Manager", "Reception", "Service"]),
    password: faker.internet.password(),
  };
};
