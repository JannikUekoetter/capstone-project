const lostItems = [
  {
    name: "Key",
    description: "Silver Key",
    img: "/assets/lostItems/one.jpeg",
    location: "Berlin",
    id: "1",
  },
  {
    name: "Headphones",
    description: "Silver and grey Headphones",
    img: "/assets/lostItems/two.jpeg",
    location: "Hamburg",
    id: "2",
  },
  {
    name: "Teapot",
    description: "Red and orange Teapot",
    img: "/assets/lostItems/three.jpeg",
    location: "Berlin",
    id: "3",
  },
  {
    name: "Lighter",
    description: "White, silver and lightblue Lighter",
    img: "/assets/lostItems/four.jpeg",
    location: "Hamburg",
    id: "4",
  },
  {
    name: "Batteries",
    description: "Yellow Batteries",
    img: "/assets/lostItems/five.jpeg",
    location: "Stuttgart",
    id: "5",
  },
  {
    name: "Compass",
    description: "Golden Compass",
    img: "/assets/lostItems/six.jpeg",
    location: "Berlin",
    id: "6",
  },
  {
    name: "Bottle",
    description: "Orange Bottle",
    img: "/assets/lostItems/seven.jpeg",
    location: "Hamburg",
    id: "7",
  },
  {
    name: "Camera",
    description: "Black and silver analog Camera",
    img: "/assets/lostItems/eight.jpeg",
    location: "Stuttgart",
    id: "8",
  },
  {
    name: "Backpack",
    description: "Black and brown backpack found in the woods",
    img: "/assets/lostItems/nine.jpeg",
    location: "München",
    id: "9",
  },
  {
    name: "Camera lens",
    description: "Black and silver camera lens",
    img: "/assets/lostItems/ten.jpeg",
    location: "München",
    id: "10",
  },
  {
    name: "Lollipop",
    description: "Red lollipop",
    img: "/assets/lostItems/eleven.jpeg",
    location: "Stuttgart",
    id: "11",
  },
  {
    name: "Band aid",
    description: "Red and white band aid box",
    img: "/assets/lostItems/twelve.jpeg",
    location: "Hamburg",
    id: "12",
  },
  {
    name: "Kids bike",
    description: "Blue, yellow, white and red kids bike",
    img: "/assets/lostItems/thirteen.jpeg",
    location: "München",
    id: "13",
  },
];

const foundItems = [
  {
    name: "Camera",
    description: "Camera underwater",
    img: "/assets/foundItems/one.jpeg",
    location: "München",
    id: "14",
  },
  {
    name: "Backpack",
    description: "Green and black backpack found in the woods",
    img: "/assets/foundItems/two.jpeg",
    location: "Hamburg",
    id: "15",
  },
  {
    name: "Diamonds",
    description: "We found a ton of diamonds!!!",
    img: "/assets/foundItems/three.jpeg",
    location: "Stuttgart",
    id: "16",
  },
  {
    name: "One shoe",
    description: "Found one shoe. Where might the other one be?",
    img: "/assets/foundItems/four.jpeg",
    location: "Berlin",
    id: "17",
  },
  {
    name: "Ring",
    description: "Found the most beautiful ring with blue stone attached",
    img: "/assets/foundItems/five.jpeg",
    id: "18",
  },
  {
    name: "Key",
    description: "Ancient Key found in the Woods",
    img: "/assets/foundItems/six.jpeg",
    location: "Berlin",
    id: "19",
  },
  {
    name: "Keyboard",
    description: "Oldschool Keyboard with Keys missing",
    img: "/assets/foundItems/seven.jpeg",
    location: "München",
    id: "20",
  },
  {
    name: "Shoe",
    description: "Found one shoe in an abandoned building",
    img: "/assets/foundItems/eight.jpeg",
    location: "Stuttgart",
    id: "21",
  },
  {
    name: "Handshoe",
    description: "One handshoe found on a parking bench",
    img: "/assets/foundItems/nine.jpeg",
    location: "Berlin",
    id: "22",
  },
  {
    name: "Camera",
    description: "Black camera found in the woods",
    img: "/assets/foundItems/ten.jpeg",
    id: "23",
  },
  {
    name: "Football",
    description: "Found a football",
    img: "/assets/foundItems/eleven.jpeg",
    location: "Stuttgart",
    id: "24",
  },
  {
    name: "Golden coins",
    description: "Found some golden coins. Wont give em back.",
    img: "/assets/foundItems/twelve.jpeg",
    location: "Hamburg",
    id: "25",
  },
  {
    name: "Golden Jewelry",
    description:
      "Found jewelry and intend to keep it. Just posting here for recognition.",
    img: "/assets/foundItems/thirteen.jpeg",
    location: "Hamburg",
    id: "26",
  },
];

function getItemByDatabaseId(id) {
  return lostItems.find((lostItem) => lostItem.id === id);
}

function getItemByDatabaseIdv2(id) {
  return foundItems.find((foundItem) => foundItem.id === id);
}

export { lostItems, foundItems, getItemByDatabaseId, getItemByDatabaseIdv2 };