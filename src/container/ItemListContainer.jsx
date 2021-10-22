import { useEffect, useState } from "react";
import { getItems } from "../modules/Items";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ greeting }) => {
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
    <div className="container mx-2 sm:m-auto text-center">
      {greeting || (
        <h2>
          A curated selection of useless items made for{" "}
          <span className="text-primary primary font-semibold">U</span>
        </h2>
      )}
      <div
        className={`${
          isLoading ? "flex" : "hidden"
        } justify-center items-center m-10`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
