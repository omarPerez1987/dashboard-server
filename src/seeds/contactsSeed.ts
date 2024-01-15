import { faker } from "@faker-js/faker";
import { ContactModel } from "../models/contactModel";
import { executeQuery } from "../config/sql";



export const generateTableContacts = async () => {
  await executeQuery(`
  CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    photo VARCHAR(255),
    date VARCHAR(255),
    hour TIME,
    name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(255),
    telephone VARCHAR(20),
    archived BOOLEAN,
    review TEXT
  )
`);
}


export const generateFakeContact = (): ContactModel => {
  return {
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
