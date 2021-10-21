import { useEffect, useState } from "react";
import { getItems } from "../modules/Items";
import Item from "./Item";

const ItemList = () => {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(getItems());
      }, 2000);
    });

  useEffect(() => {
    fetchProducts().then((newProducts) => {
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
