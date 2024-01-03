import { faker } from "@faker-js/faker";
import { RoomModel } from "../models/roomModel";

export const generateFakeRoom = (): RoomModel => {
  return {
    id: faker.string.alphanumeric(7),
    photo: faker.image.urlPicsumPhotos({ width: 155, height: 77 }),
    room: faker.helpers.arrayElement([
      "Single Bed",
      "Double Bed",
      "Double Superior",
      "Suite",
    ]),
    bed:
      faker.string.alpha({ casing: "upper" }) +
      "-" +
      faker.number.int({ max: 50 }),
    facilities: faker.helpers.arrayElements([
      "Air conditioner",
      "Breakfast",
      "Cleaning",
      "Grocery",
      "Shop near",
      "24/7 Online Support",
      "Smart Security",
      "High speed WiFi",
      "Kitchen",
      "Shower",
      "Single bed",
      "Towels",
      "Strong Locker",
      "Expert Team",
    ]),
    description: faker.lorem.paragraph(3),
    price: faker.helpers.rangeToNumber({ min: 50, max: 300 }),
    discount: faker.helpers.rangeToNumber({ min: 0, max: 50 }),
    cancel: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(["available", "booked"]),
  };
};
