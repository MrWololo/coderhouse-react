import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = (images) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve([
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
        ]);
      }, 2000);
    });

  useEffect(() => {
    const images = importAll(
      require.context("../images", false, /\.(png|jpe?g|svg)$/)
    );

    fetchProducts(images).then((newProducts) => {
      setProducts(newProducts);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div
        className={`${
          isLoading ? "flex" : "hidden"
        } justify-center items-center m-10`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
      <div className="customColumn m-2">
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              imageSRC={product.imageSRC}
              description={product.description}
              title={product.title}
              id={product.id}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};
//TODO: columns with Items from products map (page 85 from powerpoint)
//TODO: fake promise with circularProgessIndicator, load products then show here

export default ItemList;
