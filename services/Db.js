const lostItems = [
  {
    name: "Key",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/one.jpeg",
    lat: 52.520008,
    long: 13.404954,
    location: "Berlin",
    status: "lost",
    id: "1",
  },
  {
    name: "Headphones",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/two.jpeg",
    lat: 53.564922,
    long: 10.00392,
    location: "Hamburg",
    status: "lost",
    id: "2",
  },
  {
    name: "Teapot",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/three.jpeg",
    lat: 52.520308,
    long: 13.408254,
    location: "Berlin",
    status: "lost",
    id: "3",
  },
  {
    name: "Lighter",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/four.jpeg",
    lat: 53.551086,
    long: 9.993682,
    location: "Hamburg",
    status: "lost",
    id: "4",
  },
  {
    name: "Batteries",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/five.jpeg",
    lat: 48.76738,
    long: 9.205591,
    location: "Stuttgart",
    status: "lost",
    id: "5",
  },
  {
    name: "Compass",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/six.jpeg",
    lat: 48.516252,
    long: 9.149923,
    location: "Stuttgart",
    status: "lost",
    id: "6",
  },
  {
    name: "Bottle",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/seven.jpeg",
    lat: 48.474338,
    long: 8.936196,
    location: "Rottenburg am Neckar",
    status: "lost",
    id: "7",
  },
  {
    name: "Camera",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/eight.jpeg",
    lat: 51.31271,
    long: 9.479746,
    location: "Kassel",
    status: "lost",
    id: "8",
  },
  {
    name: "Backpack",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/nine.jpeg",
    lat: 48.135124,
    long: 11.581981,
    location: "München",
    status: "lost",
    id: "9",
  },
  {
    name: "Camera Lens",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/ten.jpeg",
    lat: 51.339695,
    long: 12.373075,
    location: "Leipzig",
    status: "lost",
    id: "10",
  },
  {
    name: "Lollipop",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/eleven.jpeg",
    lat: 51.481468,
    long: 51.481468,
    location: "Halle",
    status: "lost",
    id: "11",
  },
  {
    name: "Band Aid",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/twelve.jpeg",
    lat: 50.356548,
    long: 7.59942,
    location: "Koblenz",
    status: "lost",
    id: "12",
  },
  {
    name: "Kids bike",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/thirteen.jpeg",
    lat: 52.357235,
    long: 9.751259,
    location: "Hannover",
    status: "lost",
    id: "13",
  },
  {
    name: "Glasses",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/lostItems/fourteen.jpg",
    lat: 51.715248,
    long: 8.75213,
    location: "Paderborn",
    status: "lost",
    id: "14",
  },
];

const foundItems = [
  {
    name: "Camera",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/one.jpeg",
    location: "Chemnitz",
    id: "14",
  },
  {
    name: "Backpack",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/two.jpeg",
    lat: 51.058833,
    long: 13.728651,
    location: "Dresden",
    status: "found",
    id: "15",
  },
  {
    name: "Diamonds",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/three.jpeg",
    lat: 50.122427,
    long: 8.685281,
    location: "Frankfurt am Main",
    status: "found",
    id: "16",
  },
  {
    name: "One Shoe",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/four.jpeg",
    lat: 50.060754,
    long: 8.237295,
    location: "Wiesbaden",
    status: "found",
    id: "17",
  },
  {
    name: "Ring",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/five.jpeg",
    lat: 52.02379,
    long: 8.550192,
    location: "Bielefeld",
    status: "found",
    id: "18",
  },
  {
    name: "Key",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/six.jpeg",
    lat: 53.061355,
    long: 8.791523,
    location: "Bremen",
    status: "found",
    id: "19",
  },
  {
    name: "Keyboard",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/seven.jpeg",
    lat: 52.268493,
    long: 8.076874,
    location: "Osnabrück",
    status: "found",
    id: "20",
  },
  {
    name: "Shoe",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/eight.jpeg",
    lat: 52.379393,
    long: 13.09791,
    location: "Potsdam",
    status: "found",
    id: "21",
  },
  {
    name: "Handshoe",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/nine.jpeg",
    lat: 53.626806,
    long: 11.402587,
    location: "Schwerin",
    status: "found",
    id: "22",
  },
  {
    name: "Camera",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/ten.jpeg",
    lat: 53.850987,
    long: 10.683004,
    location: "Lübeck",
    status: "found",
    id: "23",
  },
  {
    name: "Football",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/eleven.jpeg",
    lat: 54.308592,
    long: 10.133887,
    location: "Kiel",
    status: "found",
    id: "24",
  },
  {
    name: "Golden Coins",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/twelve.jpeg",
    lat: 53.537206,
    long: 8.621178,
    location: "Bremerhaven",
    status: "found",
    id: "25",
  },
  {
    name: "Golden Jewelry",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/thirteen.jpeg",
    lat: 48.720324,
    long: 11.466339,
    location: "Ingolstadt",
    status: "found",
    id: "26",
  },
  {
    name: "Compass",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    img: "/assets/foundItems/fourteen.jpg",
    lat: 50.606589,
    long: 11.649814,
    location: "Ziegenrück",
    status: "found",
    id: "27",
  },
];

function getItemByDatabaseId(id) {
  return lostItems.find((lostItem) => lostItem.id === id);
}

function getItemByDatabaseIdv2(id) {
  return foundItems.find((foundItem) => foundItem.id === id);
}

export { lostItems, foundItems, getItemByDatabaseId, getItemByDatabaseIdv2 };
