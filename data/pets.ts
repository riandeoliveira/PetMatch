import { v4 as uuid } from "uuid";

export const pets = [
  {
    id: uuid(),
    image: require("../assets/images/pets/charles.jpg"),
  },
  {
    id: uuid(),
    image: require("../assets/images/pets/roseclay.jpg"),
  },
  {
    id: uuid(),
    image: require("../assets/images/pets/kumpicki.jpg"),
  },
];
