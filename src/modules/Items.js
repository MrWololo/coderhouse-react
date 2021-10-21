function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export function getItems() {
  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );
  
  return [
    {
      title: "Hamofa",
      id: 1,
      description: "A pig-shaped sofa",
      price: 5700,
      imageSRC: images["chanchofa.jpg"].default,
    },
    {
      title: "Feetfeet",
      id: 2,
      description: "Feet for your feet",
      price: 850,
      imageSRC: images["patapatas.jpg"].default,
    },
    {
      title: "Peephole",
      id: 3,
      description: "Sometimes you want to see who's on the other side",
      price: 265,
      imageSRC: images["mirilla.jpg"].default,
    },
    {
      title: "Racing lawnmower",
      id: 4,
      description: "Runs Crysis",
      price: 3600,
      imageSRC: images["cortapasto.jpg"].default,
    },
    {
      title: "Fingerless boots",
      id: 5,
      description:
        "These boots provide the best feet-cooling technology in the market!",
      price: 1400,
      imageSRC: images["boots.jpg"].default,
    },
    {
      title: "Modular door",
      id: 6,
      description:
        "A simpler door for those dwarves levitating at different heights",
      price: 2300,
      imageSRC: images["modularDoor.jpg"].default,
    },
    {
      title: "Twin glasses",
      id: 7,
      description: "A lovers delight",
      price: 7250,
      imageSRC: images["glass.jpg"].default,
    },
    {
      title: "Hoursalt and Hourpepper",
      id: 8,
      description: "Hypertension replaced with hyper anxiety",
      price: 300,
      imageSRC: images["sp.jpg"].default,
    },
  ];
}
