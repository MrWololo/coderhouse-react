import { useEffect, useState } from "react";
import { getItems } from "../modules/Items";
import ItemList from "../components/ItemList";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () =>
      new Promise((resolve, reject) => {
        setIsLoading(true);
        setTimeout(
          () => {
            return resolve(getItems(category));
          },
          // 2000
          1500
        );
      });

    fetchProducts().then((newProducts) => {
      setProducts(newProducts);
      setIsLoading(false);
    });
  }, [category]);

  return (
    <div className="mx-2 sm:m-auto text-center max-w-7xl">
      {greeting || (
        <h2>
          A curated selection of useless items made for{" "}
          <span className="text-primary primary font-semibold">U</span>
        </h2>
      )}
      {isLoading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
