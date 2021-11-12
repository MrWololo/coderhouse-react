function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

const items = [
  {
    title: "Hamofa",
    id: 1,
    description: "A pig-shaped sofa",
    price: 5700,
    imageSRC: images["chanchofa.jpg"].default,
    category: "slightly",
  },
  {
    title: "Feetfeet",
    id: 2,
    description: "Feet for your feet",
    price: 850,
    imageSRC: images["patapatas.jpg"].default,
    category: "slightly",
  },
  {
    title: "Peephole",
    id: 3,
    description: "Sometimes you want to see who's on the other side",
    price: 265,
    imageSRC: images["mirilla.jpg"].default,
    category: "completely",
  },
  {
    title: "Racing lawnmower",
    id: 4,
    description: "Runs Crysis",
    price: 3600,
    imageSRC: images["cortapasto.jpg"].default,
    category: "slightly",
  },
  {
    title: "Fingerless boots",
    id: 5,
    description:
      "These boots provide the best feet-cooling technology in the market!",
    price: 1400,
    imageSRC: images["boots.jpg"].default,
    category: "completely",
  },
  {
    title: "Modular door",
    id: 6,
    description:
      "A simpler door for those dwarves levitating at different heights",
    price: 2300,
    imageSRC: images["modularDoor.jpg"].default,
    category: "completely",
  },
  {
    title: "Twin glasses",
    id: 7,
    description: "A lovers delight",
    price: 7250,
    imageSRC: images["glass.jpg"].default,
    category: "completely",
  },
  {
    title: "Hoursalt and Hourpepper",
    id: 8,
    description: "Hypertension replaced with hyper anxiety",
    price: 300,
    imageSRC: images["sp.jpg"].default,
    category: "slightly",
  },
];

export function getItems(category) {
  const value = category
    ? items.filter((product) => {
        return product.category === category;
      })
    : items;
  return value;
}

export function getItem(itemID) {
  // console.log(items.find((item) => item.id === parseInt(itemID)));
  return items.find((item) => item.id === parseInt(itemID));
}

export function getItemsIDs() {
  return items.map((item) => item.id);
}

export function getItemsCategories() {
  return items.map((item) => item.category);
}
