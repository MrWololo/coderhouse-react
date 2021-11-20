import { useEffect, useState } from "react";
import { getItems } from "../modules/firestoreRequests";
import ItemList from "../components/ItemList";
import Loading from "../components/Loading";
import { useParams, Redirect } from "react-router-dom/cjs/react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      return await getItems(category);
    };

    fetchItems().then((newProducts) => {
      if (newProducts === false) {
        setRedirect(true);
      } else {
        setProducts(newProducts);
        setIsLoading(false);
      }
    });
  }, [category]);

  return redirect ? (
    <Redirect to={{ pathname: "/404" }} />
  ) : (
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
