import { faker } from "@faker-js/faker";
import { RoomModel } from "../models/roomModel";
import mongoose from "mongoose";

export const generateFakeRoom = (): RoomModel => {
  return {
    _id: new mongoose.Types.ObjectId(),
    photo: faker.image.urlPicsumPhotos(),
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
    facilities: faker.helpers.arrayElements(
      [
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
      ],
      { min: 3, max: 7 }
    ),
    description: faker.lorem.paragraph(3),
    price: faker.helpers.rangeToNumber({ min: 150, max: 300 }),
    discount: faker.helpers.arrayElement([0, 15, 20, 25, 30]),
    cancel: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(["available", "booked"]),
  };
};
